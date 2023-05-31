import { ScreenContentProject } from "@/components/ScreenContentProject";

export default function Page({ params }: any) {

  return (
    <div>
      <ScreenContentProject slug={params.slug} />
    </div>
  )
}