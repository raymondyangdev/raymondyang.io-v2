export const runtime = 'edge';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raymond Yang | Software Engineer',
  description: 'Portfolio Website for Raymond Yang',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}>
        <div className="w-full px-4 flex justify-center">
          <div className="w-full max-w-3xl">
            <Navbar />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center px-4">
          <div className="w-full max-w-3xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
