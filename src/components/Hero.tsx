'use client';
import { Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <Container size="lg" pt={120} pb={80}>
      {/* This new motion.div creates the frosted glass card */}
      <motion.div
        className={styles.heroCard}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Stack gap="xl" align="center">
          <div>
            <Title order={1} ta="center" className={styles.titleGradient}>
              Turn invisible digital emissions
              <br />
              into actionable insight.
            </Title>
            <Text ta="center" c="dimmed" mt="lg" className={styles.introText}>
              CarbonLens is an AI-driven agent that tracks CPU/GPU usage,
              estimates real-time CO₂ emissions, and helps you build
              carbon-efficient software.
            </Text>
          </div>

          <Group>
            <Button
              size="md"
              component="a"
              href="/login"
              color="green"
              variant="gradient"
              gradient={{ from: 'green', to: 'cyan' }}
            >
              Get started
            </Button>
          </Group>
        </Stack>
      </motion.div>
    </Container>
  );
}