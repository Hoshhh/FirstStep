'use client'

import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { useRouter } from 'next/navigation';
import HeaderEditModule from "./HeaderEditModule"
import HeaderForm from "./HeaderForm"

export default function AvailabilityContainer({children, id, sessionId}: {children: React.ReactNode, id: string, sessionId: string}) {
    const [isUser, setIsUser] = useState(false)
    const [showModal, setShowModale] = useState(false)
    const router = useRouter()
    

    useEffect(() => {
        if (id === sessionId) {
            setIsUser(true)
            setShowModale(true)
        } else {
            setIsUser(false)
            setShowModale(false)
        }
    }, [sessionId, id])
    
    //console.log({id, sessionId})
  return (
    <div className='flex flex-col w-3/4 items-center'>
      <HeaderEditModule isVisible={showModal} onClose={() => {router.push(`/user/${id}/about`)}} >
        <HeaderForm id={id} onClose={() => {router.push(`/user/${id}/about`)}} />
      </HeaderEditModule>
    </div>
  )
}
