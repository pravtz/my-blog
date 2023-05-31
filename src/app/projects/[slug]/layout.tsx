export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <main className="relative">
       <div className=" bg-gradient-bg-top absolute top-0 h-screen w-full  z-auto " />
       <div className="bg-[#7D7C79] opacity-[0.18] w-full h-[200px] " />

      {children}
    </main>
  )
}