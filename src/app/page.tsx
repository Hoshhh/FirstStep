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

  let currentUser = null;
  if (session !== null) {
    currentUser = await prisma.user.findUnique({
      where: {
        id: session?.user?.id
      }
    });
  }

  return (
    <div>
      {session === null ? (
        <Navbar />
      ) : (
        <NavbarSignedIn id={session?.user?.id} />
      )}
      <Hero />
      <Developers />
    </div>
  );
}
