'use client';
import { Card, Container, Grid, Stack, Text, Title, ThemeIcon } from '@mantine/core'; // Make sure ThemeIcon is imported
import styles from './HowItWorks.module.css';

const steps = [
  {
    step: '01',
    title: 'Monitor System',
    description:
      'The Python agent runs in the background, using psutil, pynvml, and codecarbon to sample CPU, GPU, and RAM usage in real-time.',
  },
  {
    step: '02',
    title: 'Estimate CO₂',
    description:
      'It correlates this power data with live grid carbon intensity from APIs (like ElectricityMap) to estimate CO₂ emissions per second.',
  },
  {
    step: '03',
    title: 'Optimize & Save',
    description:
      'Enable "Carbon-Aware Mode" to automatically defer non-urgent tasks (like CI jobs) to run when the grid is cleanest, saving CO₂.',
  },
];

export default function HowItWorks() {
  return (
    <Container size="lg" py={80}>
      <Title order={2} ta="center" className={styles.mainTitle}>
        How CarbonLens Works
      </Title>
      <Text c="dimmed" ta="center" mx="auto" maw={600} mb={50}>
        A simple, three-step process that turns complex power data into
        measurable environmental savings.
      </Text>

      <Grid gutter="xl">
        {steps.map((step) => (
          <Grid.Col key={step.step} span={{ base: 12, md: 4 }}>
            <Card className={styles.stepCard} withBorder radius="md" p="xl">
              <Stack gap="lg">
                
                {/* --- THIS IS THE FIX --- */}
                {/* Replaced Badge with ThemeIcon for proper centering */}
                <ThemeIcon
                  variant="gradient"
                  gradient={{ from: 'green', to: 'cyan' }}
                  size={50}
                  radius="md"
                >
                  {/* Added a span with a new class for styling */}
                  <span className={styles.stepNumber}>{step.step}</span>
                </ThemeIcon>
                {/* --- END OF FIX --- */}

                <Title order={3} className={styles.cardTitle}>
                  {step.title}
                </Title>
                <Text c="dimmed" size="sm">
                  {step.description}
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}