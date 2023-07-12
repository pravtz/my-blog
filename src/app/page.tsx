import { ProfileCover } from "@/components/ProfileCover";
import { ButtonIcon } from "@/components/ButtonIcon";
import { BsChevronDoubleDown } from "react-icons/bs";
import type { Metadata } from 'next';
import { WrapperCardProjects } from "@/components/cardProjetos/WrapperCardProjects";
import { TitleMain } from "@/components/TitleMain";
import { ScreenContriburionBlog } from "@/components/ScreenContriburionBlog";
import BalancerText from "react-wrap-balancer"

export const metadata: Metadata = {
  description: 'Blog e página pessoal de Ederson Pravtz',
};

export default function Page() {
  const textContribuition = "Evoluir, contribuir e compartilhar é importante porque é a chave para o progresso. Ao evoluir nossas habilidades e conhecimentos, somos capazes de criar soluções cada vez mais eficazes e eficientes para os problemas que enfrentamos. Compartilhar essas habilidades e conhecimentos com outras pessoas nos permite inspirá-las a fazer o mesmo, e juntos, podemos alcançar mais do que jamais poderíamos sozinhos. É através da evolução e compartilhamento que podemos moldar um futuro melhor para nós mesmos e para o mundo."

  return (
    <div className="relative ">
      <div className=" bg-gradient-bg-top absolute top-0 h-screen w-full  -z-10 " />
      <header className=" w-full ">
        <div className="bg-[#7D7C79] opacity-[0.18] w-full h-[200px] -z-10" />
        <div className="relative h-[calc(100vh-200px)] ">

          <div className="absolute top-[-100px] w-full left-0">
            <div className="absolute opacity-50 w-[300px] h-[300px] bottom-[-10%] bg-gradient-center left-[calc(50%-150px)] -z-10" />
            <ProfileCover />
          </div>

          <div className="absolute text-center animate-bounce bottom-[10%] w-full z-10  ">
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
          <TitleMain title="Meus Projetos" />
          <WrapperCardProjects />
        </section>
        <section
          id="contribuition"
          className="container m-auto"
        >
          <div className="max-w-3xl mx-auto">
            <TitleMain title="Contribuições" />
            <p className="text-center text-lg leading-8 font-sans font-light text-white/60 my-8"><BalancerText>{textContribuition}</BalancerText></p>
            <ScreenContriburionBlog />
          </div>
        </section>
        <footer className="py-4">
          <p className="text-xs text-white/10 text-center">Desenvolvido por mim <span className="underline ring-offset-2">Ederson Pravtz</span></p>
        </footer>

      </main>
    </div>
  )
}