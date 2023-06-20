import React from 'react'

//Kept on the server
export default function AboutForm() {
  return (
    <form action="" className='mt-4 flex flex-col'>
        <textarea name="" id="" cols={70} rows={10} className='rounded p-2 text-xs text-slate-800 bg-white' />
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
