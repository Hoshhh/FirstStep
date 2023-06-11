import React from 'react'
import getUser from '@/app/lib/getUser'
import prisma from '../../../lib/prismadb'

export default async function ProfileHeader({ params }: {
    params: { id: string }
}) {
    const currentUser = await prisma.user.findUnique({
      where: {
        id: params.id
      }
    })
    //console.log(params)

  return (
    <div className='flex flex-col items-center pt-16 p-4 border-b-2'>
        <img src={currentUser?.image!} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400" />
        <h4 className='pt-2 font-normal text-slate-800 text-md'>Joshua Johnson</h4>
        <h4 className='pt-1 font-normal text-slate-400 text-xs'>Full Stack Web Developer</h4>
    </div>
  )
}
