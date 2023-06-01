import { UserRole } from '@prisma/client';
import NextAuth from 'next-auth';

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
    role: UserRole
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: UserId
      role: UserRole
    } & DefaultSession['user'];
  }
}