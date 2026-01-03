import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OneStopRecruitment - Your Trusted Staffing Partner | Find Jobs & Hire Talent',
  description: 'Leading staffing agency connecting talented professionals with top employers across industries. Browse job opportunities or find the perfect candidates for your business.',
  keywords: 'staffing agency, recruitment, job search, hiring, employment, career opportunities, Toronto, Ontario, Canada',
  openGraph: {
    title: 'OneStopRecruitment - Your Trusted Staffing Partner',
    description: 'Connecting talented professionals with leading employers across industries.',
    url: 'https://onestoprecruitment.ca',
    siteName: 'OneStopRecruitment',
    images: [
      {
        url: 'https://onestoprecruitment.ca/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OneStopRecruitment - Your Trusted Staffing Partner',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneStopRecruitment - Your Trusted Staffing Partner',
    description: 'Connecting talented professionals with leading employers across industries.',
    images: [
      {
        url: 'https://onestoprecruitment.ca/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OneStopRecruitment - Your Trusted Staffing Partner',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://onestoprecruitment.ca',
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
