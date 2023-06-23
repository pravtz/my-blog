'use client'
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ElementNode } from '@graphcms/rich-text-types';
import Link from "next/link";
import clsx from "clsx";
import { ToBackButton } from "../ToBackButton";
import Image from "next/image";
import BalancerText from "react-wrap-balancer"
import { RichTextRender } from "../RichTextRender";


export const dynamic = 'force-dynamic'

type ScreenContentContribuitionProps = {
  slug: string
}

type contentContribuitionType = {
  contribution: {
    introduction: string
    subtitle: string
    title: string
    content: {
      raw: { children: ElementNode[] }
    }
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
    dateContribuitions: string
  }
}

const query = gql`query ($slug: String!) {
  contribution(where: {slug: $slug}) {
    introduction
    subtitle
    title
    content {
      raw
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
    dateContribuitions
  }
}
`

export const ScreenContentContribuition = ({ slug }: ScreenContentContribuitionProps) => {
  const { data } = useSuspenseQuery<contentContribuitionType>(query, { variables: { slug: slug } })
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };

  const dateContribuition = data.contribution.dateContribuitions

  const dateFormated = new Intl.DateTimeFormat("pt-BR", options).format(new Date(dateContribuition))
  return (
    <div className="text-white container mx-auto">
      <div className="max-w-3xl mx-auto ">
        <div className="px-4 sm: p-0">
          <ToBackButton />

          <h1 className="font-bold font-sans text-5xl mt-8 mb-2">{data.contribution.title}</h1>

          <p className="font-thin font-sans text-3xl mt-3 mb-8"><BalancerText>{data.contribution.subtitle}</BalancerText></p>

          <p className="my-4 text-lg font-light">{data.contribution.introduction}</p>


          <div className="w-full rounded-lg p-4 bg-primary/20 flex flex-wrap gap-2">
            {data.contribution.categories.map((item) => {
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
          <RichTextRender raw={data.contribution.content.raw} />
        </div>
      </div>

    </div>
  )
}