import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import AnalyticsGoogle from '@/components/AnalyticsGoogle';



export const metadata = {
  title: 'Home',
  description: 'Blog e página pessoal de Ederson Pravtz',

};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>{children}</body>
      <Analytics />
      <AnalyticsGoogle />
    </html>
  );
}