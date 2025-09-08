import type { Metadata } from "next";
import AppThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App with MUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          <Navbar />
          <main>{children}</main>
        </AppThemeProvider>
      </body>
    </html>
  );
}
