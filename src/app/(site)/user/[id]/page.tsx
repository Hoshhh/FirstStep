
export default async function Profile({ params }: {
    params: { id: string }
}) {
  const data = await fetch(`${process.env.APP_URL}/api/user/${params.id}`)
  const currentUser = await data.json()

  return (
    <div className="">
      <p>{`Welcome to ${currentUser.email}'s profile! Check out what they have going on!`}</p>
    </div>
  )
}
