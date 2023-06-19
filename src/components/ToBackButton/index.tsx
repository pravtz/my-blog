'use client'
import { MoveLeft } from "lucide-react";
import { useRouter } from 'next/navigation'


export const ToBackButton = () => {

  const router = useRouter()
  
  return (
    <button type="button" onClick={()=> router.back()} className="flex gap-2 hover:opacity-70 text-hippie-green-600/80 items-center" >
      <MoveLeft />
      <p className="text-sm font-bold">Voltar</p>
  </button>
  )
}