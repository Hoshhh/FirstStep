'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import HeaderEditModule from "./HeaderEditModule"
import HeaderForm from "./HeaderForm"

export default function AvailabilityContainer({id, sessionId}: {id: string, sessionId: string}) {
    const [showModal, setShowModale] = useState(false)
    const router = useRouter()
    

    useEffect(() => {
        if (id === sessionId) {
            setShowModale(true)
        } else {
            setShowModale(false)
        }
    }, [sessionId, id])
    
  return (
    <div className='flex flex-col w-3/4 items-center'>
      <HeaderEditModule isVisible={showModal} onClose={() => {router.push(`/user/${id}/about`)}} >
        <HeaderForm id={id} onClose={() => {router.push(`/user/${id}/about`)}} />
      </HeaderEditModule>
    </div>
  )
}
