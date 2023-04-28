import Image from 'next/image'
import { SolcialMedia } from '@/components/SocialMedia'
import clsx from 'clsx'

export const ProfileCover = () => {
  return (
    <div className="absolute top-[-100px] w-full left-0">
      <div className='flex flex-col w-full items-center justify-center mx-auto'>

        <div className='boreder rounded-full w-[260px] mb-4'>
          <Image src='/avatar.png' alt='avatar' width='260' height='260' />
        </div>

        <p className='text-md'>Olá, Bem vindo! Meu nome é</p>
        <h1 className='text-[32px] md:text-[52px]'><span className=' font-bold'>Ederson </span>Pravtz</h1>
        <p className=' text-base'>Sou desenvolvedor de sistemas web</p>
        
        <div className='py-4'>
          <SolcialMedia />
        </div>
      </div>
    </div>
  )
}