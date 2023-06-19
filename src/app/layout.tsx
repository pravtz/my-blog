import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

import AnalyticsGoogle from '@/components/AnalyticsGoogle';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { ApolloWrapper } from '@/lib/graphql/apollo-wrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight:['200', '400', '500', '700']
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={clsx('scroll-smooth font-sans', inter.variable )}>

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