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
      id: string
      iconCategory: {
        url: string
      }
    }
  ]
}

const query = gql` query QueryAllContribuitions {
  contributions {
    id
    title
    subtitle
    slug
    categories {
      id
      iconCategory {
        url
      }
    }
  }
}`

export const ScreenContriburionBlog = () => {
  const { data } = useQuery<DataQueryAllContribuitions>(query)
  console.log(data)

  return (
    <div className="flex flex-col gap-4">
      {data?.contributions.map((item) => {
        return (
          <CardContribuition
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            urlImage={item.categories[0].iconCategory?.url}
          />
        )

      })}
    </div>
  )
}