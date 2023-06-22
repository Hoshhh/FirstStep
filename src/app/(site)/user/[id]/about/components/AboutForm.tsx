'use client'
import React, { FormEventHandler, useState } from 'react'

//Kept on the server
export default function AboutForm({id}: {id: string}) {
  const [updatedAbout, setUpdatedAbout] = useState("")

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    //const formattedAbout = updatedAbout.replace(/\r?\n/g, '\n');
    await fetch(`http://localhost:3000/api/user/${id}`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        about: updatedAbout 
      })                             
    })
    setUpdatedAbout("")
  }
  return (
    <form onSubmit={handleSubmit} className='mt-4 flex flex-col'>
        <textarea 
          value={updatedAbout} 
          onChange={(e) => setUpdatedAbout(e.target.value)}
          cols={70} 
          rows={10} 
          className='rounded p-2 text-xs text-slate-800 bg-white' 
        />
        <div className='flex justify-end mt-4'>
            <button 
                type='submit'
                className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700 mb-8"
            >
                Submit
            </button>
        </div>
    </form>
  )
}
