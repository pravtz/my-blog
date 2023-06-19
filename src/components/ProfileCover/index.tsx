import Image from 'next/image'
import { SolcialMedia } from '@/components/SocialMedia'
import Avatar from '/public/avatar.png'

export const ProfileCover = () => {
  return (

    <div className='flex flex-col w-full items-center text-[#bbb] justify-center mx-auto relative'>
      <Image className='rounded-full object-contain mb-4' src={Avatar} alt='avatar' width='260' height='260' />
      <p className='text-md text-[#848484]'>Olá, Bem vindo! Meu nome é</p>
      <h1 className='text-[32px] md:text-[52px]'><span className=' font-bold'>Ederson </span>Pravtz</h1>
      <p className=' text-base text-[#848484]'>Sou desenvolvedor de sistemas web</p>

      <div className='py-4 z-10'>
        <SolcialMedia />
      </div>
    </div>

  )
}