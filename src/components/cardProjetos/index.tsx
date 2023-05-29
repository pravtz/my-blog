import Image from "next/image"
import Link from "next/link"
import { BsHeartFill, BsHeart } from 'react-icons/bs'

export type CardProps = {
  id: string
  title: string
  subtitle: string
  navigate: {
    query?: { id: string }
    slug: string
  }
  image: {
    alt: string
    url: string
  }

}


export const CardProjetos = ({ title, subtitle, image, navigate }: CardProps) => {
  return (

    <article className="p-2 m-2 rounded-[12px] flex flex-col w-[291px] border-[#5E5E5E] border-[0.2px]">
      <Link prefetch href={{
        pathname: `/projects/${encodeURIComponent(navigate.slug)}`,
        query: { id: navigate.query?.id }
      }}
      >
        <>
          <div className=" rounded-[8px] overflow-hidden">
            <Image src={image.url} alt={image.alt} width={276} height={155} />
          </div>
          <h2 className="text-basic text-2xl ">{title}</h2>

          <h3 className="text-basic-easy">{subtitle}</h3>
        </>
      </Link>
    </article>

  )
}