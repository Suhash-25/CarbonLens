import { Card, Container, Grid, Group, Text, Title, ThemeIcon, Stack } from '@mantine/core';
import styles from './featuresGrid.module.css';

const features = [
  { emoji: '📊', title: 'Real-time Monitoring', copy: 'Continuously measure CPU and GPU utilization across all your processes.' },
  { emoji: '🍃', title: 'Live CO₂ Estimates', copy: 'Estimate real-time CO₂ emissions based on your power usage and grid intensity.' },
  { emoji: '⚡', title: 'Calculate Savings', copy: 'See exactly how much CO₂ you save when carbon-aware optimization is enabled.' },
  { emoji: '🖥️', title: 'Dashboard Integration', copy: 'View live insights directly in your laptop taskbar or CI/CD dashboard.' },
  { emoji: '⏰', title: 'Smart Scheduling', copy: 'Get suggestions to automate tasks during low-carbon intensity periods.' },
  { emoji: '💡', title: 'Actionable Insights', copy: 'Understand your impact with equivalents like "CO₂ saved = 10 phone charges".' },
];

export default function FeaturesGrid() {
  return (
    <Container id="features" size="lg" py={80}> {/* CHANGED: More vertical padding */}
      
      {/* CHANGED: Added className here */}
      <Title order={2} ta="center" className={styles.mainTitle}> 
        A smarter, greener development cycle
      </Title>

      <Grid gutter="xl"> {/* CHANGED: Increased gutter */}
        {features.map((f, i) => (
          <Grid.Col key={i} span={{ base: 12, sm: 6, md: 4 }}>
            
            {/* CHANGED: className from styles.card to styles.featureCard */}
            <Card withBorder radius="md" p="lg" className={styles.featureCard}>
              
              {/* --- THIS IS THE MAIN LAYOUT CHANGE --- */}
              {/* CHANGED: Replaced <Group> with <Stack> for vertical layout */}
              <Stack gap="lg">
                <ThemeIcon
                  size={48}
                  radius="md"
                  variant="gradient"
                  gradient={{ from: 'green', to: 'cyan' }}
                >
                  <span className={styles.icon}>{f.emoji}</span>
                </ThemeIcon>

                {/* This stack groups the title and copy together */}
                <Stack gap={4}>
                  <Title order={4} className={styles.cardTitle}>{f.title}</Title>
                  <Text c="dimmed" size="sm" className={styles.cardCopy}>{f.copy}</Text>
                </Stack>
              </Stack>
              {/* --- END OF LAYOUT CHANGE --- */}

            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}