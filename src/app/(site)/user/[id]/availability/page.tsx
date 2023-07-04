import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import AvailabilityContainer from './components/AvailabilityContainer'
import AvailabilityInfo from './components/AvailabilityInfo'

//container is client-side, info is server-side
export default async function Page({ params }: {
    params: { id: string }
}) {
  const session = await getServerSession(authOptions)
    
  return (
    <AvailabilityContainer sessionId={session?.user.id} id={params.id}>
      <AvailabilityInfo id={params.id} />
    </AvailabilityContainer>
  )
}