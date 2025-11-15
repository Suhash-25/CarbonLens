'use client';
import { Container, Group, Button, Anchor } from '@mantine/core'; // Ensure Anchor is imported
import Brand from './Brand'; // Correct default import for Brand
import styles from './Header.module.css';

const navItems = [
  { label: 'Features', href: '#features' }, // Link to your features section
  { label: 'Docs', href: '/docs' }, // Placeholder for a docs page
];

export default function Header() {
  const items = navItems.map((item) => (
    <Anchor<'a'>
      key={item.label}
      href={item.href}
      className={styles.link}
      c="dimmed"
      size="sm"
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={styles.header}>
      <Container size="lg" className={styles.inner}>
        {/* Left side: Brand Logo */}
        <Brand />

        {/* Right side: Navigation links and Get Started button */}
        <Group gap="md">
          <Group className={styles.links} visibleFrom="sm">
            {items}
          </Group>
          <Button
            component="a"
            href="/login"
            size="sm" // Smaller button for header
            variant="gradient"
            gradient={{ from: 'green', to: 'cyan' }}
          >
            Sign in
          </Button>
        </Group>
      </Container>
    </header>
  );
}