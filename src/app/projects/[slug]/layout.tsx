import Image from "next/image"
import Avatar from '/public/avatar.png'
import Link from "next/link"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <main className="relative">
       <div className=" bg-gradient-bg-top absolute top-0 h-screen w-full  -z-10 " />
       <div className="bg-[#7D7C79]/20 w-full h-[120px] flex justify-center items-center " >
      <Link href="/"  >
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <Image className="rounded-full object-cover" src={Avatar} alt="Foto do Ederson Oliveira Pravtz" width={60} height={60}/>
          <p className=" text-white/50">Ederson Pravtz</p>
        </div>
      </Link>

       </div>

      {children}
      <footer className="py-4">
          <p className="text-xs text-white/10 text-center">Desenvolvido por mim <span className="underline ring-offset-2">Ederson Pravtz</span></p>
      </footer>
    </main>
  )
}