import { ScreenContentContribuition } from "@/components/ScreenContentContribuition"

export default function Contribution({ params }: any) {
  return (
    <section>
      <ScreenContentContribuition slug={params.slug} />
    </section>
  )
}