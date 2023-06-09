import prisma from '../../../lib/prismadb'


export default async function page({ params }: {
    params: { id: string }
}) {
     const currentUser = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    console.log(currentUser?.firstName)

  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 md:h-screen">
      <div className='flex flex-col col-span-1 border-r-2 items-center'>
        <h2 className='text-2xl pt-8'>FirstStepTech</h2>
        <div className='flex flex-col items-center pt-16 p-4 border-b-2'>
          <img src={currentUser?.image!} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400" />
          <h4 className='pt-2 font-normal text-slate-800 text-md'>Joshua Johnson</h4>
          <h4 className='pt-1 font-normal text-slate-400 text-xs'>Full Stack Web Developer</h4>
        </div>
        <div className='pt-12 h-full'>
          <ul className='grid grid-rows-5 content-between h-full'>
            <li>About</li>
            <li>Technical Skills</li>
            <li>Links</li>
            <li>Availability</li>
            <li>CV/Resume</li>
          </ul>
        </div>
        <div className='mb-12 mt-8'>
          Sign Out
        </div>
      </div>
      <div className='flex col-span-3 justify-center items-center'>
        Test Col 2
      </div>
    </div>
  )
}
