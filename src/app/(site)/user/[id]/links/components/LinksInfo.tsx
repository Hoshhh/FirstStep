import React from 'react'

export default async function SkillsInfo(props: {id: string}) {
  
    const data = await fetch(`http://127.0.0.1:3000/api/user/${props.id}`)
    const currentUser = await data.json()
    const links = JSON.parse(currentUser.links)

    const showLinks = () => {
      if (links != null) {
        return (
          links.map((skill:string, index:number) => (
              <li key={index}>{skill}</li>
          ))
        )
      }
    }

  return (
    <>
        <div className='flex w-full p-4 border-b-2 items-center'>
          <img src={currentUser.image} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400 mr-2" />
          <div className='flex flex-col'>
            <h4 className='pt-2 font-normal text-slate-800 text-md'>Joshua Johnson</h4>
            <h4 className='pt-1 font-normal text-slate-400 text-xs'>Full Stack Web Developer</h4>
          </div>
        </div>
        <ul className='text-sm m-4 whitespace-pre-wrap'>
          {
            showLinks()
          }
        </ul>
    </>
  )
}