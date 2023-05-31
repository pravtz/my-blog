import { Inter } from "next/font/google";
import { ProfileCover } from "@/components/ProfileCover";
import { ButtonIcon } from "@/components/ButtonIcon";
import { BsChevronDoubleDown } from "react-icons/bs";
import Balancer from "react-wrap-balancer";
import type { Metadata } from 'next';
import Line from '/public/line.svg'
import Image from "next/image";
import clsx from 'clsx'
import { WrapperCardProjects } from "@/components/cardProjetos/WrapperCardProjects";
import { TitleMain } from "@/components/TitleMain";

const inter = Inter({ subsets: ["latin"], weight: ['200'] });

export const metadata: Metadata = {
  title: 'MyBlog | Pravtz',
  description: 'Blog e página pessoal de Ederson Pravtz',
};


export default function Page() {

  const dataTest: any = []
  const data1 = [
    {
      id: 'a001',
      title: 'My blog 1',
      subtitle: 'Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. ',
      slug: 'mybog',
      image: {
        alt: "projeto 1",
        url: "/projects/311-276x155.jpg",
      },
      navigate: { slug: "myblog1" },

    },
    {
      id: 'a002',
      title: 'My blog 2',
      subtitle: 'Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. ',
      slug: 'mybog2',
      image: {
        alt: "projeto 1",
        url: "/projects/311-276x155.jpg",
      },
      navigate: { slug: "myblog2" },

    },
    {
      id: 'a003',
      title: 'My blog 3',
      subtitle: 'Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. ',
      slug: 'mybog3',
      image: {
        alt: "projeto 1",
        url: "/projects/311-276x155.jpg",
      },
      navigate: { slug: "myblog3" },

    },
    {
      id: 'a004',
      title: 'My blog 4',
      subtitle: 'Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. ',
      slug: 'mybog4',
      image: {
        alt: "projeto 1",
        url: "/projects/311-276x155.jpg",
      },
      navigate: { slug: "myblog4" },

    },
    {
      id: 'a005',
      title: 'My blog 5',
      subtitle: 'Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. ',
      slug: 'mybog4',
      image: {
        alt: "projeto 5",
        url: "/projects/311-276x155.jpg",
      },
      navigate: { slug: "myblog4" },

    },
    {
      id: 'a006',
      title: 'My blog 6',
      subtitle: 'Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. ',
      slug: 'mybog6',
      image: {
        alt: "projeto 1",
        url: "/projects/311-276x155.jpg",
      },
      navigate: { slug: "myblog4" },

    },
    {
      id: 'a007',
      title: 'My blog 7',
      subtitle: 'Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. ',
      slug: 'mybog7',
      image: {
        alt: "projeto 1",
        url: "/projects/311-276x155.jpg",
      },
      navigate: { slug: "myblog4" },

    },

  ]
  return (
    <div className="relative ">
      <div className=" bg-gradient-bg-top absolute top-0 h-screen w-full  z-auto " />
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
          <TitleMain title="Meus Projetos" />
          <WrapperCardProjects/>
        </section>

      </main>
    </div>
  )
}