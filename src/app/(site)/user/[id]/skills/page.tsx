import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SkillsContainer from './components/SkillsContainer'
import SkillsInfo from './components/SkillsInfo'

//container is client-side, info is server-side
export default async function Page({ params }: {
    params: { id: string }
}) {
  const session = await getServerSession(authOptions)
  console.log(session?.user.id)
    
  return (
    <SkillsContainer sessionId={session?.user.id} id={params.id}>
      <SkillsInfo id={params.id} />
    </SkillsContainer>
  )
}