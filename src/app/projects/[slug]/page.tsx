import { ScreenContentProject } from "@/components/ScreenContentProject";

export default function Page({ params }: any) {

  return (
    <div className="z-2">
      <ScreenContentProject slug={params.slug} />
    </div>
  )
}