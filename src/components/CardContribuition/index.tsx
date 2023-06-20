import clsx from "clsx"
import Image from "next/image"

type CardContribuitionProps = {
  urlImage: string
  title: string
  subtitle: string
  backgoundImageColor?: string
}

export const CardContribuition = ({ urlImage, title, subtitle, backgoundImageColor = "#888888" }: CardContribuitionProps) => {
  return (

    <article className="flex flex-row gap-4 p-4 rounded-lg border border-white/10 w-full h-full items-stretch">
      <div className={clsx("rounded-lg p-2 ", `bg-[${backgoundImageColor}]`)} >
        <Image src={urlImage} alt={`image sobre ${title}`} width={82} height={82} />
      </div>
      <div className=" flex flex-col justify-between  ">
        <h2 className=" text-2xl text-white font-light">{title}</h2>
        <h3 className=" text-sm text-white font-light">{subtitle}</h3>
      </div>
    </article>


  )
}