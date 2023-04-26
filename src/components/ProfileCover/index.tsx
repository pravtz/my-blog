import Image from 'next/image'
import { SolcialMedia } from '@/components/SocialMedia'

export const ProfileCover = () => {
  return (
    <div className=' absolute top-[-100px] sm:w-[600px] left-0 sm:left-[calc(50%-300px)]'>
      <div className='flex flex-col w-full items-center justify-center'>

        <div className='boreder rounded-full w-[299px] mb-4'>
          <Image src='/avatar.png' alt='avatar' width='300' height='300' />
        </div>

        <p className='text-md'>Olá, Bem vindo! Meu nome é</p>
        <h1 className='text-[52px]'><span className=' font-bold'>Ederson </span>Pravtz</h1>
        <p className=' text-2xl'>Sou desenvolvedor de sistemas web</p>
      </div>
      <div className='py-4'>
        <SolcialMedia />
      </div>
    </div>
  )
}