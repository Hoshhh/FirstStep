import React from 'react'

export default async function Page({ params }: {
    params: { id: string }
}) {
    const data = await fetch(`http://127.0.0.1:3000/api/user/${params.id}`)
    const currentUser = await data.json()
    console.log(currentUser)
  return (
    <div className='flex flex-col w-3/4 items-center'>
      <h2 className='tracking-widest pb-12'>About Me</h2>
      <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col justify-center p-2 hover:scale-105 ease-in duration-300">
        <div className='flex w-full p-4 border-b-2 items-center'>
          <img src={currentUser.image} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400 mr-2" />
          <div className='flex flex-col'>
            <h4 className='pt-2 font-normal text-slate-800 text-md'>Joshua Johnson</h4>
            <h4 className='pt-1 font-normal text-slate-400 text-xs'>Full Stack Web Developer</h4>
          </div>
        </div>
        <p className='text-sm m-4'>
          All about me!
        </p>
      </div>
    </div>
  )
}
