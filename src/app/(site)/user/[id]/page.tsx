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
    <div className="pt-32">
      <p className='py-4'>
        User: {currentUser?.id}
      </p>
      <p className='py-4'>
        Name: {currentUser?.name}
      </p>
      <p className='py-4'>
        Created At: {currentUser?.createdAt.toString()}
      </p>
      <p className='py-4'>
        First Name: {currentUser?.position}
      </p>
    </div>
  )
}
