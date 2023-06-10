import React from 'react'
import prisma from './prismadb'

export default async function getUser({ params }: {
    params: { id: string }
}) {

    const currentUser = await prisma.user.findUnique({
      where: {
        id: params.id
      }
    })

  return currentUser
}
