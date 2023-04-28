import { Inter } from "next/font/google";
import { MainLayout } from "@/layouts/main.layout";
import { ProfileCover } from "@/components/ProfileCover";
import { ButtonIcon } from "@/components/ButtonIcon";
import { BsChevronDoubleDown } from "react-icons/bs";
import Balancer from "react-wrap-balancer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <header className=" w-full">
        <header className="bg-[#d9d9d9] w-full h-[200px] " />
        <div>
          <div className="relative border">
            <ProfileCover />
          </div>
          <div className="absolute text-center animate-bounce bottom-0 w-full">
            <a href="#myprojects">
            <ButtonIcon
              sizeIcon="32"
              icon={BsChevronDoubleDown}
              type="button"
            />
            </a>
          </div>
        </div>
      </header>
      <main className=" mt-[calc(100vh-200px)] border ">
        <section
          id="myprojects"
          className="bg-[#efefef] border-[#aaa] w-full h-[500px]"
        >
          <h2 className="w-full py-4 text-center text-3xl ">Meus Projetos</h2>

          <article className="p-4">
            <div className=" flex items-center justify-center border-2 border-dashed border-[#bbb] rounded-xl p-4 h-[400px]">
              <h3 className="text-4xl p-8 text-center text-slate-500">
                <Balancer>
                  Em breve vão estar <strong>aqui</strong> meus projetos
                </Balancer>
              </h3>
            </div>
          </article>
        </section>
      </main>
    </MainLayout>
  );
}
