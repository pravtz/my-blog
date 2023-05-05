import Head from "next/head"


export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>My Blog | Pravtz </title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="My Blog" key="title" />
        <meta name='description' content='Blog e página pessoal de Ederson Pravtz' />
        <link rel="manifest" href="manifest.json" />
        <meta
          property='og:description'
          content='Blog e página pessoal de Ederson Pravtz'
        />
      </Head>
      <div className=" w-screen h-screen ">
        {children}
      </div>
    </>
  )
}