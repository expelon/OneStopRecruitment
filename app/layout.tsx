import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OneStopRecruitment - Your Trusted Staffing Partner | Find Jobs & Hire Talent',
  description: 'Leading staffing agency connecting talented professionals with top employers across industries. Browse job opportunities or find the perfect candidates for your business.',
  keywords: 'staffing agency, recruitment, job search, hiring, employment, career opportunities',
  openGraph: {
    title: 'OneStopRecruitment - Your Trusted Staffing Partner',
    description: 'Connecting talented professionals with leading employers across industries.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneStopRecruitment - Your Trusted Staffing Partner',
    description: 'Connecting talented professionals with leading employers across industries.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
