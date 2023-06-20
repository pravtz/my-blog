'use client'

import { gql } from "@apollo/client"
import { CardContribuition } from "../CardContribuition"
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const dynamic = 'force-dynamic'

type DataQueryAllContribuitions = {
  contributions: QueryType[]
}
type QueryType = {
  id: string
  title: string
  subtitle: string
  slug: string
  categories: [
    {
      backgroundColorCover: {
        hex: string
      }
      id: string
      iconCategory: {
        url: string
      }
    },
  ]
}

const query = gql` query QueryAllContribuitions {
  contributions {
    id
    title
    subtitle
    slug
    categories {
      backgroundColorCover{
        hex
      }
      id
      iconCategory {
        url
      }
    }
  }
}`

export const ScreenContriburionBlog = () => {
  const { data } = useQuery<DataQueryAllContribuitions>(query)


  return (
    <div className="flex flex-col gap-4">
      {data?.contributions.map((item) => {
        return (
          <CardContribuition
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            urlImage={item.categories[0].iconCategory?.url}
            backgoundImageColor={item.categories[0].backgroundColorCover.hex}
            slug={item.slug}
          />
        )

      })}
    </div>
  )
}