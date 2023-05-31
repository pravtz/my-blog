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
  console.log(data)

  console.log("data Slug", data.project.title)
  return (
    <div className="text-white">
      <h1>{data.project.title}</h1>
      <p>{data.project.subtitle}</p>
      <Image 
        src={data.project.coverImage.url} 
        alt={`capa do ${data.project.title}`} 
        width={data.project.coverImage.width}
        height={data.project.coverImage.height} 
      />
      <p>{data.project.introdution}</p>
      <RichText 
        content={data.project.contentText.raw}
        renderers={{
          h3: ({children}) => <h3 className="text-red-300">{children}</h3>,
          p: ({children}) => <p className="text-blue-400 font-sans">{children}</p>,
          code_block: ({children}) => (
            <div className="p-4 border rounded-xl ml-6">
              <pre className="font-mono">{children}</pre>
            </div>
          )
        }} 
      />

    </div>
  )
}