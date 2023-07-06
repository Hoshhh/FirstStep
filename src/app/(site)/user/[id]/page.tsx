
export default async function Profile({ params }: {
    params: { id: string }
}) {
  const uriBase = process.env.NODE_ENV === 'development' 
   ? 'http://localhost:3000'
   : process.env.APP_URL

  const data = await fetch(`${uriBase}/api/user/${params.id}`)
  const currentUser = await data.json()

  return (
    <div className="">
      <p>{`Welcome to ${currentUser.email}'s profile! Check out what they have going on!`}</p>
    </div>
  )
}
