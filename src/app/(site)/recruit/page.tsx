import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"


const page = async () => {
    const session = await getServerSession(authOptions)
    if (session?.user.role !== "ADMIN") {
      throw new Error("This page is for Recruiters only.")
    }

    //console.log(session)

  return (
    <div className="pt-32">Recruiter Dashboard: {session.user.role}</div>
  )
}

export default page