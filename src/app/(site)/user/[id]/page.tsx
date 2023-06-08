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
    <div className="grid grid-cols-4 gap-4 h-screen">
      <div className='flex flex-col col-span-1 border-r-2 items-center'>
        <h2 className='text-2xl pt-8'>FirstStepTech</h2>
        <div className='flex flex-col items-center pt-20'>
          <img src={currentUser?.image!} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400" />
          <h4 className='pt-2 font-normal text-slate-800 text-md'>Joshua Johnson</h4>
          <h4 className='pt-1 font-normal text-slate-400 text-xs'>Full Stack Web Developer</h4>
        </div>
      </div>
      <div className='flex col-span-3 justify-center items-center'>
        Test Col 2
      </div>
    </div>
  )
}
