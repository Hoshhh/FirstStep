'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AvailabilityForm({id, onClose}: {id: string, onClose:() => void}) {
    const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
    const [roleValue, setRoleValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [relocateValue, setRelocateValue] = useState('');
    const router = useRouter()

 
  return (
    <form  className='mt-4 flex flex-col w-full md:w-3/4'>
        <div className='pt-2'>
            <p className='text-xs sm:text-base'>First Name</p>
            <input type="text"  className={inputStyle} />
        </div>
        <div className='pt-2'>
            <p className='text-xs sm:text-base'>Last Name</p>
            <input type="text"  className={inputStyle} />
        </div>
        <div className='pt-2'>
            <p className='text-xs sm:text-base'>What role best describes you?</p>
            <select name="role" id="role" onChange={(e) => setRoleValue(e.target.value)} className={inputStyle}>
                <option value="">-- Select Role Preference --</option>
                <option value="Full Time">Frontend Web Developer</option>
                <option value="Part Time">Backend Web Developer</option>
                <option value="Either/Both">Full Stack Web Developer</option>
            </select>
        </div>
    </form>
  )
}
