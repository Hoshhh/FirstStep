import React from 'react'

export default async function AvailabilityInfo(props: {id: string}) {

    const data = await fetch(`${process.env.APP_URL}/api/user/${props.id}`)
    const currentUser = await data.json()
    const availability = JSON.parse(currentUser.availability)

  return (
    <>
        <div className='flex w-full p-4 border-b-2 items-center'>
          <img src={currentUser.image} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400 mr-2" />
          <div className='flex flex-col'>
            <h4 className='pt-2 font-normal text-slate-800 text-md'>{`${currentUser.firstName} ${currentUser.lastName}`}</h4>
            <h4 className='pt-1 font-normal text-slate-400 text-xs'>{currentUser.position}</h4>
          </div>
        </div>
        <div>
          <p className='text-base m-4 pt-1 whitespace-pre-wrap'>
            Full time/Part time: <span className='flex font-bold'>{availability[0]}</span>
          </p>
          <p className='text-base m-4 pt-1 whitespace-pre-wrap'>
            Remote/On-site: <span className='flex font-bold'>{availability[1]}</span>
          </p>
          <p className='text-base m-4 pt-1 whitespace-pre-wrap'>
            Relocation: <span className='flex font-bold'>{availability[2]}</span>
          </p>
        </div>
    </>
  )
}
