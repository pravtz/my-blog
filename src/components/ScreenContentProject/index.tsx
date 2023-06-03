'use client'
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from '@apollo/client';
import Image from "next/image";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ElementNode } from '@graphcms/rich-text-types';

export const dynamic = 'force-dynamic'

type ScreenContentProjectProps = {
  slug: string
}

type contentProjectType = {
  project: {
    title: string,
    subtitle: string,
    bibliography: { html:string},
    contentText: {
      raw:{
        children: ElementNode[]
      }
    }
    date: string
    introdution: string
    id: string
    coverImage: {
      url: string
      height: number
      width: number
    }

  }
}

const query = gql`query ($slug: String!) {
  project(where: {slug: $slug}) {
    title
    subtitle
    bibliography {
      html
    }
    contentText {
      raw
    }
    date 
    introdution
    id
    coverImage {
      url
      height
      width
    }
  }
}
`

export const ScreenContentProject  = ({slug}: ScreenContentProjectProps) => {
  const { data } = useSuspenseQuery<contentProjectType>(query, {variables:{slug:slug}})
  
  return (
    <div className="text-white container mx-auto">
      <div className="max-w-3xl mx-auto ">
        <h1 className="font-bold font-sans text-5xl mt-11 mb-2">{data.project.title}</h1>
        <p className="font-thin font-sans text-3xl my-3">{data.project.subtitle}</p>
        <Image 
          src={data.project.coverImage.url} 
          alt={`capa do ${data.project.title}`} 
          width={data.project.coverImage.width}
          height={data.project.coverImage.height} 
        />
        <p className="my-2 text-lg font-light">{data.project.introdution}</p>
        <RichText 
          content={data.project.contentText.raw}
          renderers={{
            h1: ({children}) => <h2 className="text-white my-4 ml-4 font-bold text-3xl ">{children}</h2>,
            h2: ({children}) => <h2 className="text-white my-4 ml-4 font-bold text-2xl ">{children}</h2>,
            h3: ({children}) => <h3 className="text-white my-4 ml-4 font-bold text-xl">{children}</h3>,
            h4: ({children}) => <h3 className="text-white my-4 ml-4 font-bold text-lg">{children}</h3>,
            h5: ({children}) => <h3 className="text-white my-4 ml-4 font-bold text-md">{children}</h3>,
            p: ({children}) => <p className="text-white/80 font-normal font-sans">{children}</p>,
            code_block: ({children}) => (
              <div className=" border rounded-md my-4 mx-8 bg-slate-800 ">
                <div className=" pl-1 w-full h-6 bg-slate-700 border border-slate-600 flex justify-start items-center gap-2">
                  <div className="rounded-full w-3 h-3 bg-red-600"/>
                  <div className="rounded-full w-3 h-3  bg-yellow-600 "/>
                  <div className="rounded-full w-3 h-3 bg-green-600"/>
                </div>
                <div className="p-4">
                  <pre className="font-mono">{children}</pre>
                </div>

              </div>
            ),
            code: ({children})=><>{children}</>,
            a: ({children})=><>{children}</>,
            ul: ({children}) =>  <ul>{children}</ul>,
            li: ({children}) => <li>{children}</li>,
            ol: ({children}) => <ol>{children}</ol>,
            table: ({children})=><>{children}</>,
            table_head: ({children})=><>{children}</>,
            table_body: ({children})=><>{children}</>,
            table_row: ({children})=><>{children}</>,
            table_cell: ({children})=><>{children}</>,
            table_header_cell: ({children})=><>{children}</>,
            italic: ({children})=><>{children}</>,
            underline: ({children})=><>{children}</>,
          }} 
        />
      </div>

    </div>
  )
}