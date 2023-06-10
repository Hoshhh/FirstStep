
import prisma from '../../../lib/prismadb'
import ProfileHeader from '../components/ProfileHeader'


export default function page({ params }: {
    params: { id: string }
}) {


  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 md:h-screen">
      <div className='flex flex-col col-span-1 border-r-2 items-center'>
        <h2 className='text-2xl pt-8'>FirstStepTech</h2>
        <ProfileHeader params={params}/>
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
