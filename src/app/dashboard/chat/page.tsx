'use client';

import { Button, Card, Container, Group, Stack, Text, Textarea, Title } from '@mantine/core';
import { useState } from 'react';
import styles from './page.module.css';

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, content: input.trim() };
    setMessages(m => [...m, userMsg]);
    setInput('');
    // mock reply for now
    setTimeout(() => {
      setMessages(m => [...m, { role: 'assistant', content: `Echo: ${userMsg.content}` }]);
    }, 500);
  };

  return (
    <Container size="lg" pt="lg">
      <Title order={2}>Agent Chat</Title>
      <Card withBorder radius="md" p="lg" mt="md">
        <Stack>
          <div className={styles.messagesContainer}>
            {messages.length === 0 && <Text c="dimmed">No messages yet. Be brave.</Text>}
            {messages.map((m, i) => (
              <Card key={i} p="sm" withBorder radius="md" mt="sm" className={m.role === 'user' ? styles.userMessage : styles.assistantMessage}>
                <Text size="sm"><b>{m.role}</b>: {m.content}</Text>
              </Card>
            ))}
          </div>
          <Group align="end">
            <Textarea
              autosize
              minRows={2}
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              className={styles.textareaContainer}
            />
            <Button onClick={send}>Send</Button>
          </Group>
        </Stack>
      </Card>
    </Container>
  );
}
