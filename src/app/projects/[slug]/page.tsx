import { ScreenContentProject } from "@/components/ScreenContentProject";
import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}



const dataMetadata = async (query: string, variable?: object) => {
  try{
  const headers = {
    'content-type': 'application/json',
    'Authorization': `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`
  }
  const requestBody = {
   query: query,
  }
  if(variable !== undefined ) Object.assign(requestBody, {variables:variable} )

  console.log(requestBody)

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody)
  };

    const urlData = process.env.NEXT_PUBLIC_KEY_GRAPHQL
    if(urlData) {
      const {data} = await ( await fetch(urlData, options )).json()
      return data
    }
  } catch(err) {
    console.log('ERROR DURING FETCH REQUEST', err);
  }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  console.log(params, searchParams )
  const query = `query ($slug: String!) {
    project(where: {slug: $slug}) {
      title
      subtitle
    }
  }`

  const data = await dataMetadata(query, {slug: 'cli-bitcoin'})
  console.log('RESPONSE FROM FETCH REQUEST', data);
  return {
    title: data?.project.title ?? "Pravtz",
    description:`${data?.project.title}: ${data?.project.subtitle}` 

  }
}

export default function Page({ params }: any) {

  return (
    <div className="z-2">
      <ScreenContentProject slug={params.slug} />
    </div>
  )
}