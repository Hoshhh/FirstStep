import Hero from '@/components/Hero'
import Developers from '@/components/Developers'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import prisma from '../app/lib/prismadb'
import { NextApiRequest } from 'next'
import Navbar from '@/components/Navbar'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  /*
  const currentUser = await prisma.user.findUnique({
    where: {
      id: session?.user.id
    }
  })*/

  //console.log(currentUser)

  return (
    <div>
      <Navbar />
      <Hero />
      <Developers />
    </div>
  )
}
