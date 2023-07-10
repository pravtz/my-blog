import { ScreenContentProject } from "@/components/ScreenContentProject";
import { ResolvingMetadata, Metadata } from "next";
import {MyHypergraphFetch} from '@/services/my.hypegraph'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const query = `query ($slug: String!) {
    project(where: {slug: $slug}) {
      title
      subtitle
      slug
      date
      coverImage {
        url
        height
        width
      }
    }
  }`

  const data = await MyHypergraphFetch(query, params)
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data?.project.title ?? "Pravtz",
    description: `${data?.project.title}: ${data?.project.subtitle}` ?? "Pravtz",

    openGraph:{
      title: data?.project.title,
      description: `${data?.project.title}: ${data?.project.subtitle}`,
      siteName: 'Pravtz',
      url: `http://pravtz.dev.br/project/${data?.project.slug}`,
      images: [
        {
          url: data.project.coverImage.url,
          height: data.project.coverImage.height,
          width:  data.project.coverImage.wedth,
          alt: `imagem principal do ${data?.project.title}`
        },
        ...previousImages
      ],
      locale: 'pt-BR',
      type: 'website'
    },
    twitter:{
      card: "summary_large_image",
      title: data?.project.title,
      description: data?.project.subtitle,
      creator: '@pravtz',
      images: [data.project.coverImage.url]
    },
    
  }
}


export default function Page({ params }: any) {
  return (
    <div className="z-2">
      <ScreenContentProject slug={params.slug} />
    </div>
  )
}