import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LinksContainer from './components/LinksContainer'
import LinksInfo from './components/LinksInfo'

//container is client-side, info is server-side
export default async function Page({ params }: {
    params: { id: string }
}) {
  const session = await getServerSession(authOptions)
  console.log(session?.user.id)
    
  return (
    <LinksContainer sessionId={session?.user.id} id={params.id}>
      <LinksInfo id={params.id} />
    </LinksContainer>
  )
}