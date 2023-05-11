import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

import AnalyticsGoogle from '@/components/AnalyticsGoogle';
import { Inter } from 'next/font/google';
import clsx from 'clsx';



export const metadata = {
  title: 'Home',
  description: 'Blog e página pessoal de Ederson Pravtz',

};
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={clsx('scroll-smooth', inter.variable)}>

      <body className='relative min-h-full'>{children}
        <Analytics />
        <AnalyticsGoogle />
      </body>
    </html>
  );
}