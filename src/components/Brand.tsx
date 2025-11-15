'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Group, Text } from '@mantine/core';
import styles from './Brand.module.css';

// This component will be used by your Header and Footer
export default function Brand() {
  return (
    <Link href="/" className={styles.brandLink}>
      <Group gap="xs">
        <Image
          src="/logo.png" // This points to /public/logo.png
          alt="CarbonLens Logo"
          width={30} // Set a fixed width
          height={30} // Set a fixed height
          className={styles.logoImage}
        />
        <Text c="white" fw={700} size="lg" className={styles.brandName}>
          CarbonLens
        </Text>
      </Group>
    </Link>
  );
}