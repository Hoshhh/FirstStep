import React from 'react'

export default async function AvailabilityInfo(props: {id: string}) {

    const data = await fetch(`http://127.0.0.1:3000/api/user/${props.id}`)
    const currentUser = await data.json()
    const availability = JSON.parse(currentUser.availability)

  return (
    <>
        <div className='flex w-full p-4 border-b-2 items-center'>
          <img src={currentUser.image} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400 mr-2" />
          <div className='flex flex-col'>
            <h4 className='pt-2 font-normal text-slate-800 text-md'>Joshua Johnson</h4>
            <h4 className='pt-1 font-normal text-slate-400 text-xs'>Full Stack Web Developer</h4>
          </div>
        </div>
        <div>
          <p className='text-base m-4 pt-1 whitespace-pre-wrap'>
            Full time/Part time: <li className='font-bold'>{availability[0]}</li>
          </p>
          <p className='text-base m-4 pt-1 whitespace-pre-wrap'>
            Remote/On-site: <li className='font-bold'>{availability[1]}</li>
          </p>
          <p className='text-base m-4 pt-1 whitespace-pre-wrap'>
            Relocation: <li className='font-bold'>{availability[2]}</li>
          </p>
        </div>
    </>
  )
}
