import { NextResponse } from 'next/server'
import prisma from '@/app/lib/prismadb'

export async function GET(request: Request, { params }: any) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    console.log(params)
    try {
        const currentUser = await prisma.user.findUnique({
            where: {
                id: params.id
            }
        })

        return new NextResponse(JSON.stringify(currentUser))
    } catch (error) {
        return new NextResponse("Database error", {status: 500})
    }
}
