'use client'

import { useEffect, useState } from "react"
import SkillsEditModule from "./SkillsEditModule"
import SkillsForm from "./SkillsForm"


export default function SkillsContainer({children, id, sessionId}: {children: React.ReactNode, id: string, sessionId: string}) {
    const [isUser, setIsUser] = useState(false)
    const [showModal, setShowModale] = useState(false)

    useEffect(() => {
        if (id === sessionId) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    }, [sessionId, id])
    
  return (
    <div className='flex flex-col w-3/4 items-center'>
      <h2 className='tracking-widest mb-4'>Technical Skills</h2>
      { isUser ?
        <button 
          className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700 mb-8"
          onClick={() => setShowModale(true)}
          >Edit</button>
        : ""
      }
      <div className="w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col justify-center p-2 hover:scale-105 ease-in duration-300">
        {children}
      </div>
      <SkillsEditModule isVisible={showModal} onClose={() => setShowModale(false)} >
        <SkillsForm id={id} onClose={() => setShowModale(false)} />
      </SkillsEditModule>
    </div>
  )
}