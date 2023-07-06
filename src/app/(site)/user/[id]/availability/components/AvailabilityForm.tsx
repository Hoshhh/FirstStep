'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AvailabilityForm({id, onClose}: {id: string, onClose:() => void}) {
    const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
    const [workValue, setWorkValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [relocateValue, setRelocateValue] = useState('');
    const router = useRouter()

    const uriBase = process.env.NODE_ENV === 'development' 
   ? 'http://localhost:3000'
   : process.env.APP_URL

  useEffect(() => {
    fetch(`${uriBase}/api/user/${id}`)
      .then(response => response.json())
      .then(data => {
            if (data.availability != null) {
                const parsedAvailability = JSON.parse(data.availability);
                setWorkValue(parsedAvailability[0] || '');
                setLocationValue(parsedAvailability[1] || '');
                setRelocateValue(parsedAvailability[2] || '');
                console.log(parsedAvailability)
            }
        })
      .catch(error => console.error(error))
  }, [id])

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const newAvailability = [ workValue, locationValue, relocateValue ];
    await fetch(`${uriBase}/api/user/${id}/availability`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        availability: JSON.stringify(newAvailability)
      })                             
    })
    onClose()
    router.refresh()
  }
 
  return (
    <form onSubmit={handleSubmit} className='mt-4 flex flex-col w-full md:w-3/4'>
        <div className='py-2'>
            <p className='pt-2 text-xs sm:text-base'>Are you looking for a part time or full time position?</p>
            <select name="work" id="work" value={workValue} onChange={(e) => setWorkValue(e.target.value)} className={inputStyle}>
                <option value="">-- Select Employement Preference --</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Either/Both">Either/Both</option>
            </select>

            <p className='pt-2 text-xs sm:text-base'>Are you looking for remote or on-site work?</p>
            <select name="location" id="location" value={locationValue} onChange={(e) => setLocationValue(e.target.value)} className={inputStyle}>
                <option value="">-- Select Location Preference --</option>
                <option value="Remote Only">Remote Only</option>
                <option value="On-site Only">On-site Only</option>
                <option value="Either/Both">Either/Both</option>
            </select>

            <p className='pt-2 text-xs sm:text-base'>Are you willing to relocate?</p>
            <select name="relocate" id="relocate" value={relocateValue} onChange={(e) => setRelocateValue(e.target.value)} className={inputStyle}>
                <option value="">-- Select Relocation Preference --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
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
