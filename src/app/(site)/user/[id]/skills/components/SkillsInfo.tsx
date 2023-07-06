import React from 'react'

export default async function SkillsInfo(props: {id: string}) {
  const uriBase = process.env.NODE_ENV === 'development' 
   ? 'http://localhost:3000'
   : process.env.APP_URL
  
    const data = await fetch(`${uriBase}/api/user/${props.id}`)
    const currentUser = await data.json()
    const skills = JSON.parse(currentUser.skills)
  return (
    <>
        <div className='flex w-full p-4 border-b-2 items-center'>
          <img src={currentUser.image} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400 mr-2" />
          <div className='flex flex-col'>
            <h4 className='pt-2 font-normal text-slate-800 text-md'>{`${currentUser.firstName} ${currentUser.lastName}`}</h4>
            <h4 className='pt-1 font-normal text-slate-400 text-xs'>{currentUser.position}</h4>
          </div>
        </div>
        <ul className='text-sm m-4 whitespace-pre-wrap'>
          {
            skills.map((skill:string, index:number) => (
              <li key={index}>{skill}</li>
            ))
          }
        </ul>
    </>
  )
}