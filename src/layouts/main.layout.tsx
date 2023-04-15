import Head from "next/head"


export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>My Blog | Pravtz </title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="My Blog" key="title" />
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}