'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default async function ProfileHeader({id, sessionId}: {id: string, sessionId: string }) {
    const [isUser, setIsUser] = useState(false)
    const data = await fetch(`http://127.0.0.1:3000/api/user/${id}`)
    const currentUser = await data.json()
    
    
  return (
    <div className='flex flex-col items-center pt-16 p-4 border-b-2'>
        <img src={currentUser.image} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400" />
        <h4 className='pt-2 font-normal text-slate-800 text-md'>Joshua Johnson</h4>
        <h4 className='pt-1 font-normal text-slate-400 text-xs'>Full Stack Web Developer</h4>
        {id === sessionId 
        ? <Link href={`/user/${id}/header`} className="p-1 pl-2 pr-2 text-sm rounded-full text-slate-100 bg-sky-700 mt-4">Edit</Link> 
        : ""
        }
    </div>
  )
}
