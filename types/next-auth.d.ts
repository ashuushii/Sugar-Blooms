import 'next-auth';
import { User as PrismaUser } from '@prisma/client';

declare module 'next-auth' {
  interface User extends Omit<PrismaUser, 'emailVerified' | 'password'> {
    id: string;
    email: string | null;
    name: string | null;
    role: string;
  }

  interface Session {
    user: User & {
      id: string;
      role: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
  }
}
