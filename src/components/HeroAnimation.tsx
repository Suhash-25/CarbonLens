'use client';

import styles from './HeroAnimation.module.css';

/**
 * A safe placeholder component to replace the 3D animation
 * that was causing a runtime error with React 19.
 */
export default function HeroAnimation() {
  return (
    <div className={styles.paper}>
      <div className={styles.box}>
        <span className={styles.text}>CarbonLens</span>
        <br />
        <span className={styles.dimmedText}>(3D Animation Placeholder)</span>
      </div>
    </div>
  );
}