import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevPortfolio | Senior Architect",
  description: "A high-performance portfolio for a Senior Frontend Architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"></div>
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
