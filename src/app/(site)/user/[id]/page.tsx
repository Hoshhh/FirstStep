
export default async function Profile({ params }: {
    params: { id: string }
}) {
  const data = await fetch(`http://127.0.0.1:3000/api/user/${params.id}`)
  const currentUser = await data.json()

  //console.log(currentUser.image)

  return (
    <div className="">
      <p>{`Welcome to ${currentUser.email}'s profile! Check out what they have going on!`}</p>
    </div>
  )
}
