import Link from 'next/link'

export default async function ProfileHeader({id, sessionId}: {id: string, sessionId: string }) {
  const uriBase = process.env.NODE_ENV === 'development' 
   ? 'http://localhost:3000'
   : process.env.APP_URL

    const data = await fetch(`${uriBase}/api/user/${id}`)
    const currentUser = await data.json()
    
    
  return (
    <div className='flex flex-col items-center pt-16 p-4 border-b-2'>
        <img src={currentUser.image} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400" />
        <h4 className='pt-2 font-normal text-slate-800 text-md'>{`${currentUser.firstName} ${currentUser.lastName}`}</h4>
        <h4 className='pt-1 font-normal text-slate-400 text-xs'>{currentUser.position}</h4>
        {id === sessionId 
        ? <Link href={`/user/${id}/header`} className="p-1 pl-2 pr-2 text-sm rounded-full text-slate-100 bg-sky-700 mt-4">Edit</Link> 
        : ""
        }
    </div>
  )
}
