import React from 'react'

export default async function Page({ params }: {
    params: { id: string }
}) {
    const data = await fetch(`http://127.0.0.1:3000/api/user/${params.id}`)
    const currentUser = await data.json()
    console.log(currentUser)
  return (
    <div>{currentUser.email}</div>
  )
}
