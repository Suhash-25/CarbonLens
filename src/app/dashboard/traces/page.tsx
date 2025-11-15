'use client';

import { Card, Container, Stack, Text, Title } from '@mantine/core';

export default function TracesPage() {
  const traces = [
    { runId: 'demo-1', objective: 'Summarize docs', status: 'succeeded', createdAt: new Date().toISOString() },
  ];

  return (
    <Container size="lg" pt="lg">
      <Title order={2}>Agent Runs</Title>
      <Stack mt="md">
        {traces.map(t => (
          <Card key={t.runId} withBorder radius="md" p="lg" component="a" href={`/app/traces/${t.runId}`}>
            <Text fw={600}>{t.objective}</Text>
            <Text size="sm" c="dimmed">{t.status} • {new Date(t.createdAt).toLocaleString()}</Text>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
