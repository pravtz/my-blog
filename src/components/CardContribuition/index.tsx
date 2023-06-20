import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

type CardContribuitionProps = {
  urlImage: string
  title: string
  subtitle: string
  backgoundImageColor?: string
  slug: string
}

export const CardContribuition = ({slug, urlImage, title, subtitle, backgoundImageColor = "#888888" }: CardContribuitionProps) => {
  return (
    <Link className="hover:bg-white/5" href={`/contributions/${slug}`} >
      <article className="flex flex-row gap-4 p-2 rounded-lg border border-white/10 w-full h-full items-stretch">
        <div className={clsx("rounded-lg p-2 border border-white/5", `bg-[${backgoundImageColor}]`)} >
          <Image src={urlImage} alt={`image sobre ${title}`} width={82} height={82} />
        </div>
        <div className=" flex flex-col justify-between  ">
          <h2 className=" text-2xl text-white font-light">{title}</h2>
          <h3 className=" text-sm text-white/60 font-light">{subtitle}</h3>
        </div>
      </article>
    </Link>


  )
}