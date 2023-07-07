import Hero from '@/components/Hero'
import Developers from '@/components/Developers'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import prisma from '../app/lib/prismadb'
import { NextApiRequest } from 'next'
import Navbar from '@/components/Navbar'
import NavbarSignedIn from '@/components/NavbarSignedIn'

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session)

  return (
    <div>
      <Navbar id={session?.user?.id} session={session} />
      <Hero />
      <Developers />
    </div>
  );
}
