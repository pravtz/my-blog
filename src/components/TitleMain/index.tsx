import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import Line from '/public/line.svg'

const inter = Inter({ subsets: ["latin"], weight: ['200'] });

type TitleType = {
  title: string
}

export const TitleMain = ({ title }: TitleType) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className={clsx(
        inter.className,
        "py-4 text-center text-[42px] sm:text-[48px] leading-5 text-[#bbb] ")}>{title}</h2>
      <Image src={Line} width={340} alt="line" />
    </div>
  )
}