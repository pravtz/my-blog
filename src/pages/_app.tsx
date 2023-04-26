import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5ZMLZP77ZM"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5ZMLZP77ZM', {
        page_path: window.location.pathname,
});
`,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
