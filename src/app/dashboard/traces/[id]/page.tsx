'use client';

import { Card, Container, Stack, Text, Title } from '@mantine/core';

export default function TraceDetail({ params }: { params: { id: string } }) {
  const steps = [
    { step: 1, tool: 'search_docs', input: { query: 'carbon' }, output: [{ id: 1, title: 'Carbon-aware CI' }], latency_ms: 120 },
    { step: 2, tool: 'write_memory', input: { kind: 'summary', content: '5-point plan' }, output: { ok: true }, latency_ms: 40 },
  ];

  return (
    <Container size="lg" pt="lg">
      <Title order={2}>Run: {params.id}</Title>
      <Stack mt="md">
        {steps.map(s => (
          <Card key={s.step} withBorder radius="md" p="lg">
            <Text fw={600}>Step {s.step}: {s.tool}</Text>
            <Text size="sm">Latency: {s.latency_ms} ms</Text>
            <Text size="sm" mt="xs"><b>Input</b>: {JSON.stringify(s.input)}</Text>
            <Text size="sm" mt="xs"><b>Output</b>: {JSON.stringify(s.output)}</Text>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
