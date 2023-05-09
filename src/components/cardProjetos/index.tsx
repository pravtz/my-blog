import Image from "next/image"
import { BsHeartFill, BsHeart } from 'react-icons/bs'

type CardProps = {
  title: string
  subtitle: string
  image: {
    alt: string
    url: string
  }
  like: {
    amountOfLike: number

  }
}

export const CardProjetos = ({ title, subtitle, image }: CardProps) => {
  return (
    <article className="p-2 flex flex-col w-[291px] border">
      <Image src={image.url} alt={image.alt} width={276} height={155} />
      <div className="flex justify-between">
        <h2>{title}</h2>
        <div>
          <span>26</span>
          <BsHeartFill />

        </div>
      </div>
      <h3>{subtitle}</h3>
    </article>
  )
}