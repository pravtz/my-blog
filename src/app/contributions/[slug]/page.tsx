import { ScreenContentContribuition } from "@/components/ScreenContentContribuition"
import { MyHypergraphFetch } from "@/services/my.hypegraph"
import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const query = `query ($slug: String!) {
    contribution(where: {slug: $slug}) {
      title
      subtitle
      slug
      categories {
        iconCategory {
          url
          width
          height
        }
      }
    }
  }`

  const data = await MyHypergraphFetch(query, params)

  const previousImages = (await parent).openGraph?.images || []
  return {
    title: data?.contribution.title ?? "Pravtz",
    description: `${data?.contribution.title}: ${data?.contribution.subtitle}` ?? "Pravtz",
    

    openGraph:{
      title: data?.contribution.title,
      description: `${data?.contribution.title}: ${data?.contribution.subtitle}`,
      siteName: 'Pravtz',
      url: `http://pravtz.dev.br/contribution/${data?.contribution.slug}`,
      images: [
        {
          url: data?.contribution.categories[0].iconCategory.url,
          height: data?.contribution.categories[0].iconCategory.height,
          width:  data?.contribution.categories[0].iconCategory.wedth,
          alt: `imagem principal do ${data?.contribution.title}`
        },
        ...previousImages
      ],
      locale: 'pt-BR',
      type: 'website'
    },
    twitter:{
      card: "summary_large_image",
      title: data?.contribution.title,
      description: data?.contribution.subtitle,
      creator: '@pravtz',
      images: [data?.contribution.categories[0].iconCategory.url]
    },
    
  }
}

export default function Contribution({ params }: any) {
  return (
    <section>
      <ScreenContentContribuition slug={params.slug} />
    </section>
  )
}