'use client';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { ReactNode, useMemo, useState } from 'react';
import themeBase from '@/styles/theme';

export default function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        ...themeBase,
        palette: { ...themeBase.palette, mode },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* TODO: Add toggle button in Navbar */}
      {children}
    </ThemeProvider>
  );
}
