import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import HeaderContainer from './components/HeaderContainer'

//container is client-side
export default async function Page({ params }: {
    params: { id: string }
}) {
  const session = await getServerSession(authOptions)
    
  return (
    <HeaderContainer sessionId={session?.user.id} id={params.id} />
  )
}