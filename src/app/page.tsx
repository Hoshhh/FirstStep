import Image from 'next/image'
import Hero from '@/components/Hero'
import Developers from '@/components/Developers'
import User from '@/components/User'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
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
