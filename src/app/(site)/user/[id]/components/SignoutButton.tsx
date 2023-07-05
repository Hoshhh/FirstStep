'use client'
import { signOut } from 'next-auth/react'
import { FaSignOutAlt } from 'react-icons/fa'

export default function SignoutButton() {
  return (
    <div className='flex mb-12 mt-8 items-center'>
        <button onClick={() => signOut()} className='flex items-center p-2 border-2 border-slate-200 rounded-full text-sky-800'>
            <FaSignOutAlt size={30} />
            <p className='ml-2'>Sign out</p>
        </button>
    </div>
  )
}
