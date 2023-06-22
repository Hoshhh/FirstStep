'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'

export default function AboutForm({id}: {id: string}) {
  const [updatedAbout, setUpdatedAbout] = useState("")
  const [showError, setShowError] = useState(false)
  const characters = updatedAbout.length
  const maxCharacters = 1000

  useEffect(() => {
    if (characters > maxCharacters) {
      setShowError(true)
    } else {
      setShowError(false)
    }
  }, [characters])

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    
    if (characters <= maxCharacters) {
      await fetch(`http://localhost:3000/api/user/${id}`, {
        method: 'PATCH',                                                              
        body: JSON.stringify({
          about: updatedAbout 
        })                             
      })
      setShowError(false)
    } else {
      setShowError(true)
    }
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
        <div className='flex justify-start text-xs'>
          <p>{`${characters}/${maxCharacters}`}</p>
          {
            showError ? <h6 className='text-xs text-red-500 ml-4'>You have too many characters. Your changes won&apos;t be saved.</h6> : ""
          }
        </div>
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
