'use client';
import { Container, Group, Text, Anchor } from '@mantine/core';
import Brand from './Brand'; 
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <Container size="lg" className={styles.inner}>
        <Group justify="space-between" align="center">
          
          {/* 2. Use the Brand component here */}
          <Brand />

          <Text c="dimmed" size="sm">
            © {new Date().getFullYear()} CarbonLens. All rights reserved.
          </Text>
        </Group>
      </Container>
    </div>
  );
}