import { Inter } from 'next/font/google'
import { MainLayout } from '@/layouts/main.layout'
import { ProfileCover } from '@/components/ProfileCover'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>

      <main className="relative h-screen w-screen ">
        <header className='bg-[#d9d9d9] w-full h-[200px]' />
        <div className='relative'>
          <ProfileCover />
        </div>
      </main>
    </MainLayout>
  )

}