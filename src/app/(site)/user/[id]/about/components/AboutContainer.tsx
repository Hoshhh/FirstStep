'use client'

import { useEffect, useState } from "react"

export default function AboutContainer({children, id, sessionId}: {children: React.ReactNode, id: string, sessionId: string}) {
    const [isUser, setIsUser] = useState(false)

    useEffect(() => {
        if (id === sessionId) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    }, [sessionId, id])
    
    console.log({id, sessionId})
  return (
    <div className='flex flex-col w-3/4 items-center'>
      <h2 className='tracking-widest pb-12'>About Me</h2>
      <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col justify-center p-2 hover:scale-105 ease-in duration-300">
        {isUser ? "This is your profile" : "This is someone elses profile"}
        {children}
      </div>
    </div>
  )
}
