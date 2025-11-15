import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import Providers from './providers';
import styles from './layout.module.css';

export const metadata = {
  title: 'CarbonLens',
  description: 'Agentic UI that actually helps you measure, provide, reduce and montize carbon emissions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={styles.body}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
