import { NextResponse } from 'next/server'
import prisma from '@/app/lib/prismadb'
import cors from '@/app/lib/cors'
import { User } from '@prisma/client';

export async function PATCH(request: Request, { params }: any) {
  const body:User = await request.json();

  try {
    const aboutUpdate = await prisma.user.update({
      where: { id: params.id },
      data: {
        about: body.about
      }
    })

    return NextResponse.json(aboutUpdate, {status: 200});

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
