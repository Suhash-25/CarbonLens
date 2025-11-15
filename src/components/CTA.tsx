import { Button, Container, Stack, Text, Title } from '@mantine/core';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <Container size="lg" py={80}>
      {/* This div is the main card. 
        It has the frosted glass effect.
      */}
      <div className={styles.ctaCard}>
        
        {/* This is the "glow" element. It's a pseudo-element
          in the CSS, but it lives inside the ctaCard.
        */}
        <div className={styles.glow} />

        <Stack align="center" gap="lg">
          <Title order={2} ta="center" className={styles.title}>
            Ready to make your software carbon-efficient?
          </Title>
          
          <Text c="dimmed" ta="center" className={styles.subtitle}>
            Start tracking your digital emissions and build greener
            applications today.
          </Text>
          
          <Button
            component="a"
            href="/login"
            size="md"
            variant="gradient"
            gradient={{ from: 'green', to: 'cyan' }}
          >
            Get started
          </Button>
        </Stack>
      </div>
    </Container>
  );
}