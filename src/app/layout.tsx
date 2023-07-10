import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

import AnalyticsGoogle from '@/components/AnalyticsGoogle';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { ApolloWrapper } from '@/lib/graphql/apollo-wrapper';
import { Metadata } from 'next';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['200', '400', '500', '700']
})
export const metadata: Metadata = {
  title: {
    template: '%s | Ederson Pravtz',
    default: 'Ederson Pravtz'
  },
  creator: '@pravtz',
  alternates: {
    canonical: '/',
  },
  authors: [{
    name: 'Ederson Pravtz',
    url: 'https://pravtz.dev.br'
  }],
  applicationName: 'Ederson Pravtz',
  generator: 'Next.js',
  keywords:['pravtz', 'desenvolvedor front-end', 'Ederson Pravtz', 'portifilio web'],
  publisher: 'Ederson Pravtz',
  colorScheme: 'dark',

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },




}
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={clsx('scroll-smooth font-sans', inter.variable)}>

      <body className='relative bg-main-bg'>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
        <Analytics />
        <AnalyticsGoogle />
      </body>
    </html>
  );
}