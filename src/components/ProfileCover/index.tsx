import Image from 'next/image'
import { SolcialMedia } from '@/components/SocialMedia'
import clsx from 'clsx'

export const ProfileCover = () => {
  return (

    <div className='flex flex-col w-full items-center text-[#bbb] justify-center mx-auto relative'>

      <div className=' rounded-full w-[260px] mb-4 bg-cover'>
        <Image src='/avatar.png' alt='avatar' width='276' height='276' />
      </div>

      <p className='text-md'>Olá, Bem vindo! Meu nome é</p>
      <h1 className='text-[32px] md:text-[52px]'><span className=' font-bold'>Ederson </span>Pravtz</h1>
      <p className=' text-base'>Sou desenvolvedor de sistemas web</p>

      <div className='py-4'>
        <SolcialMedia />
      </div>
    </div>

  )
}