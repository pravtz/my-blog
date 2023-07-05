import { ScreenContentProject } from "@/components/ScreenContentProject";
import { Variable } from "lucide-react";
import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const dataMetadata = async () => {
  const headers = {
    'content-type': 'application/json',
  }
  const requestBody = {
    query: `query ($slug: String!) {
      project(where: {slug: $slug}) {
        title
        subtitle
      }
    }`,
   variables: { slug: 'cli-bitcoin' }
  }
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody)
  };
  try{
    const urlData = process.env.NEXT_PUBLIC_KEY_GRAPHQL // tá errado!

    const {data} = (await fetch(urlData, options  )).json()
    console.log('RESPONSE FROM FETCH REQUEST', data);
    return data
  } catch(err) {
    console.log('ERROR DURING FETCH REQUEST', err);
    
  }

}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  console.log(params, searchParams )
  //const data = dataMetadata()
  return {
    title: "testestsetset",
    description: "asaaaaa aaaa aa",


  }
}

export default function Page({ params }: any) {

  return (
    <div className="z-2">
      <ScreenContentProject slug={params.slug} />
    </div>
  )
}