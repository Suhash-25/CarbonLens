'use client';

import { Button, Card, Container, Group, Stack, Text, TextInput, Title } from '@mantine/core';
import { useState } from 'react';

type Doc = { id: string; title: string; snippet: string; createdAt: string };

export default function DocsPage() {
  const [docs, setDocs] = useState<Doc[]>([
    { id: '1', title: 'Carbon-aware CI', snippet: 'Use marginal intensity data to schedule builds…', createdAt: new Date().toISOString() }
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const add = () => {
    if (!title.trim() || !content.trim()) return;
    setDocs(d => [{ id: String(Date.now()), title: title.trim(), snippet: content.trim().slice(0, 120) + '…', createdAt: new Date().toISOString() }, ...d]);
    setTitle(''); setContent('');
  };

  return (
    <Container size="lg" pt="lg">
      <Title order={2}>Docs & RAG</Title>

      <Card withBorder radius="md" p="lg" mt="md">
        <Stack>
          <Text fw={600}>Add a quick note</Text>
          <Group>
            <TextInput label="Title" placeholder="Doc title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} style={{ flex: 1 }} />
            <TextInput label="Content" placeholder="Paste text…" value={content} onChange={(e) => setContent(e.currentTarget.value)} style={{ flex: 2 }} />
            <Button onClick={add}>Save</Button>
          </Group>
        </Stack>
      </Card>

      <Stack mt="md">
        {docs.map(doc => (
          <Card key={doc.id} withBorder radius="md" p="lg">
            <Group justify="space-between" mb="xs">
              <Text fw={600}>{doc.title}</Text>
              <Text size="xs" c="dimmed">{new Date(doc.createdAt).toLocaleString()}</Text>
            </Group>
            <Text c="dimmed" size="sm">{doc.snippet}</Text>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
