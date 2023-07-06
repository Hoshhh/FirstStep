'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AvailabilityForm({id, onClose}: {id: string, onClose:() => void}) {
    const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [roleValue, setRoleValue] = useState('');
    const router = useRouter()

    const uriBase = process.env.NODE_ENV === 'development' 
   ? 'http://localhost:3000'
   : process.env.APP_URL

    useEffect(() => {
    fetch(`${uriBase}/api/user/${id}`)
      .then(response => response.json())
      .then(data => {
            if (data.firstName != null) {
                setFirstNameValue(data.firstName || '');
            }
            if (data.lastName != null) {
                setLastNameValue(data.lastName || '');
            }
            if (data.position != null) {
                setRoleValue(data.position || '');
            }
        })
      .catch(error => console.error(error))
  }, [id])

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await fetch(`${uriBase}/api/user/${id}/header`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        firstName: firstNameValue,
        lastName: lastNameValue,
        position: roleValue,
      })                             
    })
    onClose()
    router.refresh()
  }

 
  return (
    <form onSubmit={handleSubmit} className='mt-4 flex flex-col w-full md:w-3/4'>
        <div className='pt-2'>
            <p className='text-xs sm:text-base'>First Name</p>
            <input type="text" value={firstNameValue} className={inputStyle} onChange={(e) => setFirstNameValue(e.target.value)} />
        </div>
        <div className='pt-2'>
            <p className='text-xs sm:text-base'>Last Name</p>
            <input type="text" value={lastNameValue} className={inputStyle} onChange={(e) => setLastNameValue(e.target.value)} />
        </div>
        <div className='pt-2'>
            <p className='text-xs sm:text-base'>What role best describes you?</p>
            <select name="role" id="role" value={roleValue} onChange={(e) => setRoleValue(e.target.value)} className={inputStyle}>
                <option value="">-- Select Role Preference --</option>
                <option value="Frontend Web Developer">Frontend Web Developer</option>
                <option value="Backend Web Developer">Backend Web Developer</option>
                <option value="Full Stack Web Developer">Full Stack Web Developer</option>
            </select>
        </div>
        <div className='flex flex-col h-full sm:items-end'>
            <button
            type='submit'
            className="p-2 pl-4 pr-4 sm:mb-2 text-sm uppercase rounded-full text-slate-100 bg-green-700 w-3/4 sm:w-2/6"
            >
                Save Changes
            </button>
        </div>
    </form>
  )
}
