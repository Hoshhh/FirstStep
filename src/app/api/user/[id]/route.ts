import { NextResponse } from 'next/server'
import prisma from '@/app/lib/prismadb'
import cors from '@/app/lib/cors'
import { User } from '@prisma/client';

export async function GET(request: Request, { params }: any) {
    try {
        const currentUser = await prisma.user.findUnique({
            where: {
                id: params.id
            }
        })

        return cors(
            request,
            new Response(JSON.stringify(currentUser), {
            status: 200,
            headers: { "Content-Type": "application/json" },
            })
        );
    } catch (error) {
        return new NextResponse("Database error", {status: 500})
    }
}

export async function OPTIONS(request: Request) {
  return cors(
    request,
    new Response(null, {
      status: 204,
    })
  );
}
