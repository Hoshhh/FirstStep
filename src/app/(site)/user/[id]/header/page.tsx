import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import HeaderContainer from './components/HeaderContainer'
import HeaderInfo from './components/HeaderInfo'

//container is client-side, info is server-side
export default async function Page({ params }: {
    params: { id: string }
}) {
  const session = await getServerSession(authOptions)
    
  return (
    <HeaderContainer sessionId={session?.user.id} id={params.id}>
      <HeaderInfo id={params.id} />
    </HeaderContainer>
  )
}