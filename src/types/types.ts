import { Session as NextAuthSession } from "next-auth";

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: 'admin' | 'tenant' | 'landlord';
    imageUrl: string;
  accessToken: string;
}

export interface Session extends NextAuthSession {
  accessToken: string;
  user: User;
}
