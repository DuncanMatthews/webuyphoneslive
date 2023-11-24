import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      isAdmin: any;
      id?: string;
      name?: string;
      email?: string;
      image?: string;
      // Add any other custom properties here
    };
  }
}
