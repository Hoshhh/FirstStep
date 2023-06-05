import Image from 'next/image'
import Hero from '@/components/Hero'
import Developers from '@/components/Developers'
import User from '@/components/User'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import prisma from '../app/lib/prismadb'
import { NextApiRequest } from 'next'

export default async function Home() {
  const session = await getServerSession(authOptions)
  
  const currentUser = await prisma.user.findUnique({
    where: {
      id: session?.user.id
    }
  })

  //console.log(currentUser)

  console.log(session)
  return (
    <div>
      <Hero />
      <Developers />
      {JSON.stringify(session)}
      <User />
    </div>
  )
}
