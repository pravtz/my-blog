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

    <article className="p-2 m-2 rounded-[12px] flex flex-col w-[291px] border-[#5E5E5E] border-[0.2px]">

      <div className=" rounded-[8px] overflow-hidden">
        <Image src={image.url} alt={image.alt} width={276} height={155} />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-basic text-2xl ">{title}</h2>
        <div className="flex items-center gap-2">
          <span className="text-basic">26</span>
          <BsHeartFill color="#3a3a3a" />
        </div>
      </div>
      <h3 className="text-basic-easy">{subtitle}</h3>
    </article>

  )
}