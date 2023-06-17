import React from 'react'
import AboutContainer from './components/AboutContainer'
import AboutInfo from './components/AboutInfo'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

//container is client-side, info is server-side
export default async function Page({ params }: {
    params: { id: string }
}) {
  const session = await getServerSession(authOptions)
  console.log(session?.user.id)
    
  return (
    <AboutContainer sessionId={session?.user.id} id={params.id}>
      <AboutInfo id={params.id} />
    </AboutContainer>
  )
}
