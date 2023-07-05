
import Link from 'next/link'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import ProfileHeader from './components/ProfileHeader'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignoutButton from './components/SignoutButton'

export default async function UserLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: { id: string }
}) {
  const session = await getServerSession(authOptions)

  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 md:h-screen">
      <div className='flex flex-col col-span-1 border-r-2 items-center'>
        <Link href="/" className='text-2xl pt-8'>FirstStepTech</Link>
        <ProfileHeader id={params.id} sessionId={session?.user.id}/>
        <div className='pt-12 h-full'>
          <ul className='grid grid-rows-5 content-between h-full'>
            <Link href={`/user/${params.id}/about`} >About</Link>
            <Link href={`/user/${params.id}/skills`} >Technical Skills</Link>
            <Link href={`/user/${params.id}/links`} >Links</Link>
            <Link href={`/user/${params.id}/availability`} >Availability</Link>
          </ul>
        </div>
        <SignoutButton />
      </div>
      <div className='flex col-span-3 justify-center items-center pb-4'>
        {children}
      </div>
    </div>
  )
}
