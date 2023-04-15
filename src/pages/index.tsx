import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaBars } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { MainLayout } from '@/layouts/main.layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>

      <main className="relative h-screen w-screen ">
        <header className='bg-[#d9d9d9] w-full h-[200px]'>
          <div className='text-white float-right mt-4 mr-4' >
            <div className='flex items-center'>
              <button className='w-[32px] h-[32px] border border-white rounded-full mx-4'>
                <div className='h-full w-full flex justify-center items-center text-center'>
                  <IoLanguage size='24px' />
                </div>
              </button>
              <FaBars size={'32px'} />
            </div>
          </div>
        </header>
        <div className='relative'>
          <div className=' absolute top-[-100px] sm:w-[600px] left-0 sm:left-[calc(50%-300px)]'>
            <div className='flex flex-col w-full items-center justify-center'>

              <div className='boreder rounded-full w-[299px] mb-4'>
                <Image src='/avatar.png' alt='avatar' width='300' height='300' />
              </div>

              <p className='text-md'>Olá, Bem vindo! Meu nome é</p>
              <h1 className='text-[52px]'><span className=' font-bold'>Ederson </span>Pravtz</h1>
              <p className=' text-2xl'>Sou desenvolvedor de sistemas web</p>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )

}