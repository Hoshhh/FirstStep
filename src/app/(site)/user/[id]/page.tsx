import prisma from '../../../lib/prismadb'


export default async function page({ params }: {
    params: { id: string }
}) {
     const currentUser = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

  return (
    <div className="pt-32">User: {JSON.stringify(currentUser)}</div>
  )
}
