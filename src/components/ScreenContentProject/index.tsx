'use client'
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from '@apollo/client';
import Image from "next/image";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ElementNode } from '@graphcms/rich-text-types';
import Link from "next/link";
import clsx from "clsx";


export const dynamic = 'force-dynamic'

type ScreenContentProjectProps = {
  slug: string
}

type contentProjectType = {
  project: {
    title: string,
    subtitle: string,
    bibliography: { html: string },
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
        backgroundColorCover:  {
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
  console.log(dateProject)
  const dateFormated = new Intl.DateTimeFormat("pt-BR", options ).format( new Date(dateProject))
  return (
    <div className="text-white container mx-auto">
      <div className="max-w-3xl mx-auto ">
        <div className="px-4 sm: p-0">
          <h1 className="font-bold font-sans text-5xl mt-11 mb-2">{data.project.title}</h1>
          <div>
            {data.project.technologiesUsed.map((item)=> {
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

            {data.project.categories.length > 0 && <h3 className="tracking-wider leading-8 my-4 ml-4 text-primary/80 font-bold text-xl">Tecnilogias utilizadas nesse projeto</h3>}
          
          <div className="w-full rounded-lg p-4 bg-primary/20 flex flex-wrap gap-2">
            {data.project.categories.map((item) => {
              console.log(item.backgroundColorCover.hex)
              
              return (
                <div key={item.id} className={clsx(item.backgroundColorCover.hex ? `bg-[${item.backgroundColorCover.hex}]` : "bg-white/20", "rounded-lg w-24") }>
                  <div className="flex flex-col gap-2 items-center p-4">
                    <Image width={40} height={40} src={item.iconCategory.url} alt={item.nameCategory}/>
                    <p>{item.nameCategory}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <RichText
            content={data.project.contentText.raw}
            renderers={{
              h1: ({ children }) => <h2 className="tracking-wider leading-8 my-4 ml-4 text-primary font-bold text-3xl ">{children}</h2>,
              h2: ({ children }) => <h2 className="tracking-wider leading-8 my-4 ml-4 text-primary font-bold text-2xl ">{children}</h2>,
              h3: ({ children }) => <h3 className="tracking-wider leading-8 my-4 ml-4 text-primary/80 font-bold text-xl">{children}</h3>,
              h4: ({ children }) => <h4 className="tracking-wider leading-8 my-4 ml-4 text-primary/80 font-bold text-lg">{children}</h4>,
              h5: ({ children }) => <h5 className="tracking-wider leading-8 my-4 ml-4 text-primary/80 font-bold text-md">{children}</h5>,
              p: ({ children }) => <p className="text-white/80 font-normal font-sans tracking-wide	">{children}</p>,
              blockquote: ({ children }) => (
                <div className="ml-11 my-8 flex flex-row items-start h-full relative">
                  <div className="w-6 h-full p-2 mx-2 text-4xl bg-primary" >&#34;</div>
                  <blockquote className=" leading-8 tracking-widest text-xl italic font-semibold">{children}</blockquote>
                </div>
              ),
              code_block: ({ children }) => (
                <div className=" border rounded-md my-4 mx-8 bg-primary/10 ">
                  <div className=" pl-1 w-full h-6 bg-primary/60 border border-slate-600 flex justify-start items-center gap-2">
                    <div className="rounded-full w-3 h-3 bg-red-600" />
                    <div className="rounded-full w-3 h-3  bg-yellow-600 " />
                    <div className="rounded-full w-3 h-3 bg-green-600" />
                  </div>
                  <div className="p-4 overflow-auto">
                    <pre className="font-mono">{children}</pre>
                  </div>

                </div>
              ),
              code: ({ children }) => <code className="font-mono">{children}</code>,

              a: ({ children, openInNewTab, href, rel, ...rest }) => {

                if (href?.match(/^https?:\/\/|^\/\//i)) {
                  return (
                    <a
                      className="underline underline-offset-4 decoration-primary/30 hover:decoration-primary/100 hover:underline "
                      href={href}
                      target={openInNewTab ? '_blank' : '_self'}
                      rel={rel || 'noopener noreferrer'}
                      {...rest}
                    >
                      {children}
                    </a>
                  );
                }

                return (
                  // @ts-ignore ou // @ts-expect-error na linha anterior
                  <Link className="underline underline-offset-4 decoration-primary/30 hover:decoration-primary/100 hover:underline " href={href}>
                    {children}
                  </Link>
                );
              },

              ul: ({ children }) => <ul className={' list-image-checkmark  ml-8 my-4 decoration-primary list'}>{children}</ul>,
              li: ({ children }) => <li className="ml-4">{children}</li>,
              ol: ({ children }) => <ol className="list-decimal ml-4 my-4">{children}</ol>,
              table: ({ children }) => <table className="w-full my-4 text-sm text-left text-primary/20 dark:text-primary/20">{children}</table>,
              table_head: ({ children }) => <thead className="text-md text-primary/30 uppercase dark:text-primary/20">{children}</thead>,
              table_body: ({ children }) => <tbody>{children}</tbody>,
              table_row: ({ children }) => <tr className="border-b border-y-primary/30 bg-primary/10 ">{children}</tr>,
              table_cell: ({ children }) => <td className="px-6 py-3 border-x border-x-primary/10">{children}</td>,
              table_header_cell: ({ children }) => <th className="px-6 py-4 font-medium text-white bg-primary/20 border border-primary/50 whitespace-nowrap dark:text-white">{children}</th>,
              italic: ({ children }) => <em>{children}</em>,
              bold: ({ children }) => <strong>{children}</strong>,
              underline: ({ children }) => <span className="underline ring-offset-2 ring-offset-emerald-700">{children}</span>,
            }}
          />
        </div>
      </div>

    </div>
  )
}