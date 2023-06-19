import Script from "next/script";

const AnalyticsGoogle = () => {
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
    </>
  )
}

export default AnalyticsGoogle