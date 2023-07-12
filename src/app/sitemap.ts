import { MyHypergraphFetch } from '@/services/my.hypegraph'

const getAllSlugs = async () => {
  const queryData = `query {
    contributions {
      slug
      updatedAt
    }
    projects {
      slug
      updatedAt
    }
  }`

  const data = await MyHypergraphFetch(queryData)
  return data
}


export default async function sitemap() {
  const baseUrl = 'https://pravtz.dev.br'

  const data = await getAllSlugs()


  const contributionsData = data?.contributions.map((item: any) => {
    return {
      url: `${baseUrl}/contributions/${item.slug}`,
      lastModified: item.updatedAt
    }
  })
  const projectsData = data?.projects.map((item: any) => {
    return {
      url: `${baseUrl}/projects/${item.slug}`,
      lastModified: item.updatedAt
    }
  })


  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...contributionsData,
    ...projectsData



  ]
}