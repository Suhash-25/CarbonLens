'use client';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import styles from './BackgroundAnimation.module.css';

// This component is the particle field itself
function Particles({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null!);
  const light = useRef<THREE.PointLight>(null!);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  // Generate random positions for the particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      // --- SPEED ADJUSTED HERE ---
      const speed = 0.005 + Math.random() / 250; // Slower base speed and random factor
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 25;
      temp.push({ t, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  // This buffer holds the final positions of all particles
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos.set([particles[i].x, particles[i].y, particles[i].z], i * 3);
    }
    return pos;
  }, [count, particles]);

  useFrame((state) => {
    // Make the light follow the mouse
    if (light.current) {
      light.current.position.x = state.mouse.x * viewport.width;
      light.current.position.y = state.mouse.y * viewport.height;
    }

    // Animate the particles
    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z } = particle;
      
      // Update the particle's time
      // --- SPEED ADJUSTED HERE ---
      t = particle.t += speed / 3; // Increased divisor to slow down update
      
      // Calculate wave-like movement
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Update the dummy object's position
      dummy.position.set(
        x + a * (factor / 10),
        y + b * (factor / 10),
        z + b * (factor / 10)
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();

      // Apply the dummy's matrix to the particle
      mesh.current.geometry.attributes.position.setXYZ(
        i,
        dummy.position.x,
        dummy.position.y,
        dummy.position.z
      );
    });

    // Mark the position attribute as needing an update
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the entire particle field
    mesh.current.rotation.x += 0.0005;
    mesh.current.rotation.y += 0.0007;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="#40c057" />
      <Points ref={mesh} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#40c057" // A green tint to match the "carbon" theme
          // --- SIZE ADJUSTED HERE ---
          size={0.04} // Made particles larger
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </>
  );
}

// This is the main export component
export default function BackgroundAnimation() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 30 }} // Camera is closer (fov: 30)
      >
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}