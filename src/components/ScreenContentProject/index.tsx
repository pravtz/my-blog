'use client'
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from '@apollo/client';
import Image from "next/image";
import { ElementNode } from '@graphcms/rich-text-types';
import clsx from "clsx";
import { ToBackButton } from "../ToBackButton";
import { RichTextRender } from "../RichTextRender";


export const dynamic = 'force-dynamic'

type ScreenContentProjectProps = {
  slug: string
}

type contentProjectType = {
  project: {
    title: string,
    subtitle: string,
    bibliography: {
      raw: {
        children: ElementNode[]
      }
    }
    contentText: {
      raw: {
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
    },
    technologiesUsed: [
      {
        id: string
        nameStack: string
        description: string
      }
    ],
    categories: [
      {
        description: string,
        id: string,
        nameCategory: string,
        backgroundColorCover: {
          hex: string
        },
        iconCategory: {
          id: string
          url: string
        }

      }

    ]

  }
}

const query = gql`query ($slug: String!) {
  project(where: {slug: $slug}) {
    title
    subtitle
    bibliography {
      raw
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
    technologiesUsed {
      id
      nameStack
      description
    }
    categories {
      description
      id
      nameCategory
      backgroundColorCover {
        hex
      }
      iconCategory {
        id
        url
      }
    }
  }
}

`

export const ScreenContentProject = ({ slug }: ScreenContentProjectProps) => {
  const { data } = useSuspenseQuery<contentProjectType>(query, { variables: { slug: slug } })
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };

  const dateProject = data.project.date

  const dateFormated = new Intl.DateTimeFormat("pt-BR", options).format(new Date(dateProject))
  return (
    <div className="text-white container mx-auto">
      <div className="max-w-3xl mx-auto ">
        <div className="px-4 sm: p-0">
          <ToBackButton />
          <h1 className="font-bold font-sans text-5xl mt-8 mb-2">{data.project.title}</h1>
          <div>
            {data.project.technologiesUsed.map((item) => {
              return (

                <div key={item.id} className=" flex items-center gap-1">
                  <p>{item.nameStack}</p>
                  <p>|</p>
                  <p className=" text-xs">{dateFormated}</p>
                </div>
              )
            })}
          </div>
          <p className="font-thin font-sans text-3xl my-3">{data.project.subtitle}</p>
          <Image
            src={data.project.coverImage.url}
            alt={`capa do ${data.project.title}`}
            width={data.project.coverImage.width}
            height={data.project.coverImage.height}
          />
          <p className="my-2 text-lg font-light">{data.project.introdution}</p>

          {data.project.categories.length > 0 && <h3 className="tracking-wider leading-8 my-4 ml-4 text-primary/80 font-bold text-xl">Tecnologias utilizadas nesse projeto</h3>}

          <div className="w-full rounded-lg p-4 bg-primary/20 flex flex-wrap gap-2">
            {data.project.categories.map((item) => {

              return (
                <div key={item.id} className={clsx(item.backgroundColorCover.hex ? `bg-[${item.backgroundColorCover.hex}]` : "bg-white/20", "rounded-lg w-24")}>
                  <div className="flex flex-col gap-2 items-center p-4">
                    <Image width={40} height={40} src={item.iconCategory.url} alt={item.nameCategory} />
                    <p>{item.nameCategory}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <RichTextRender raw={data.project.contentText.raw} />
          <div className="my-8">
            <RichTextRender raw={data.project.bibliography.raw} />
          </div>
        </div>
      </div>

    </div>
  )
}