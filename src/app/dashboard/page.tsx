'use client';

import { Card, Container, Grid, Group, Text, Title } from '@mantine/core';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function Dashboard() {
  const data = {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{ data: [3,5,4,7,6,8,9], borderWidth: 2, tension: 0.3 }]
  };

  return (
    <Container size="xl" pt="lg">
      <Group justify="space-between" mb="md">
        <Title order={2}>Dashboard</Title>
      </Group>
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card withBorder radius="md" p="lg">
            <Text fw={600} mb="sm">Weekly Activity</Text>
            <Line data={data} options={{ plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }} />
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder radius="md" p="lg">
            <Text fw={600} mb="xs">Recent</Text>
            <Text c="dimmed" size="sm">Nothing to see here yet.</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
