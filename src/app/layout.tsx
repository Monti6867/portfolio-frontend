import type { Metadata } from 'next';
import AppThemeProvider from '@/providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Production-ready Next.js + MUI setup',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
