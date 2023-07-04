import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"

export default function AvailabilityEditModule({ isVisible, onClose, children }: {isVisible:Boolean, onClose:() => void, children: React.ReactNode}) {
    if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-slate-800 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-3/4 sm:h-3/4 md:w-2/4 md:h-4/6 bg-slate-100 rounded-xl p-4'>
            <div className='flex justify-end'>
                <button onClick={() => onClose()}>
                    <AiOutlineCloseCircle size={30}/>
                </button>
            </div>
            <div className='flex flex-col items-center w-full h-full'>
                <h2 className='text-xl sm:text-3xl uppercase'>Edit your availability</h2>
                <p className='text-xs text-slate-400 p-2 text-center hidden sm:flex'>Let people know if you&apos;re looking for part time, full time, remote, etc.</p>
                {children}
            </div>
        </div>
    </div>
  )
}
