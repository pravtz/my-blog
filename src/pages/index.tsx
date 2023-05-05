import { Inter } from "next/font/google";
import { MainLayout } from "@/layouts/main.layout";
import { ProfileCover } from "@/components/ProfileCover";
import { ButtonIcon } from "@/components/ButtonIcon";
import { BsChevronDoubleDown } from "react-icons/bs";
import Balancer from "react-wrap-balancer";
import Line from '/public/line.svg'
import Image from "next/image";
import clsx from 'clsx'

const inter = Inter({ subsets: ["latin"], weight: ['200'] });

export default function Home() {
  return (
    <MainLayout>
      <div className="relative bg-main-bg">
        <div className=" bg-gradient-bg-top absolute top-0 h-screen w-screen z-auto " />
        <header className=" w-full ">
          <div className="bg-[#7D7C79] opacity-[0.18] w-full h-[200px] " />
          <div className="relative h-[calc(100vh-200px)] ">

            <div className="absolute top-[-100px] w-full left-0">
              <div className="absolute opacity-50 w-[300px] h-[300px] bottom-[-10%] bg-gradient-center left-[calc(50%-150px)] z-auto" />
              <ProfileCover />
            </div>

            <div className="absolute text-center animate-bounce bottom-[15%] w-full">
              <a href="#myprojects">
                <ButtonIcon
                  className="hover:opacity-50"
                  colorIcon="#BBB"
                  sizeIcon="32"
                  icon={BsChevronDoubleDown}
                  type="button"
                />
              </a>
            </div>

          </div>
        </header>
        <main className="relative">
          <div className="absolute opacity-50 blur-xl w-[50%] h-[80%] top-[-30%] bg-gradient-center left-0 z-auto" />
          <section
            id="myprojects"
            className=" w-full h-[500px]"
          >
            <div className="flex flex-col items-center">
              <h2 className={clsx(inter.className, "py-4 text-center text-[42px] sm:text-[48px] leading-5 text-[#bbb] ")}>Meus Projetos</h2>
              <Image src={Line} width={340} alt="line" />
            </div>


            <article className="p-4">
              <div className=" flex items-center justify-center border-2 border-dashed border-[#444] opacity-30 rounded-xl p-4 h-[400px]">
                <h3 className="text-4xl p-8 text-center text-slate-500">
                  <Balancer>
                    Soon my projects will be here
                  </Balancer>
                </h3>
              </div>
            </article>
          </section>
        </main>
      </div>
    </MainLayout>
  );
}
