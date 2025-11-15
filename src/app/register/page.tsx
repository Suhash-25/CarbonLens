"use client";
import { Button, PasswordInput, Stack, Text, TextInput, Anchor, Paper, Title } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // 1. Import the router
import { ArrowLeft as IconArrowLeft } from 'tabler-icons-react';
import styles from '../auth.module.css';
import BackgroundAnimation from '../../components/BackgroundAnimation'; // This is your animation
import { useState } from 'react';

export default function Register() {
  const router = useRouter(); // 2. Initialize the router
  
  // This state is for the API call (correct)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 3. This is the function that runs when you click the button
  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
      });
      const data = await res.json();
      
      if (data.success) {
        // 4. This is the line that sends you to the dashboard
        router.push('/dashboard');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      {/* This is the background animation (correct) */}
      <BackgroundAnimation />

      <Anchor
        component={Link}
        href="/"
        className={styles.backLink}
      >
        <IconArrowLeft size={16} />
        Back to Home
      </Anchor>
      
      <Paper className={styles.formCard} radius="md" p="xl" withBorder>
        {/* 5. The <form> tag with onSubmit is essential */}
        <form onSubmit={handleRegister}>
          <Stack>
            <Title order={2} ta="center">
              Create an account
            </Title>
            <TextInput
              label="Full Name"
              placeholder="Your Name"
              mt="md"
              styles={{ label: { color: 'var(--mantine-color-gray-5)' } }}
              required
            />
            <TextInput
              label="Email"
              placeholder="Your Email"
              mt="md"
              styles={{ label: { color: 'var(--mantine-color-gray-5)' } }}
              required
              type="email"
            />
            <PasswordInput
              label="Password"
              placeholder="••••••••"
              mt="md"
              styles={{ label: { color: 'var(--mantine-color-gray-5)' } }}
              required
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="••••••••"
              mt="md"
              styles={{ label: { color: 'var(--mantine-color-gray-5)' } }}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            />
            
            {error && <Text color="red" size="sm" ta="center">{error}</Text>}

            {/* 6. This button is now type="submit" and will trigger the form's onSubmit */}
            <Button
              type="submit"
              fullWidth
              mt="xl"
              variant="gradient"
              gradient={{ from: 'green', to: 'cyan' }}
              loading={loading}
            >
              Register
            </Button>
            <Text size="xs" c="dimmed" ta="center" mt="md">
              Already have an account?{' '}
              <Anchor component={Link} href="/login" size="xs">
                Sign in
              </Anchor>
            </Text>
          </Stack>
        </form>
      </Paper>
    </div>
  );
}