import connectToDB from 'app/utils/connectMongo';
import UserMOdal from 'app/utils/model/user';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID ?? '',
      clientSecret: process.env.CLIENT_SECRET ?? ''
    }),
    Credentials({
      name: 'this app',

      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const email = credentials.email;
        const password = credentials.password;

        await connectToDB();
        const userr = await UserMOdal.findOne({ email });
        if (!userr) return null;

        const isPasswordCorrect = await bcrypt.compare(password, userr.password);
        if (!isPasswordCorrect) return null;

        const user = {
          id: userr.id.toString(),
          email: userr.email,
          isAdmin: userr.isAdmin
        };

        return user;
      }
    })
  ],

  callbacks: {
    async jwt({ token, user, account }: { token: any; account: any; user: any }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }

      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.isAdmin = user.isAdmin;
      } else {
        token.jwt = JWT.sign(
          { name: token.name, email: token.email, sub: token.sub },
          process.env.NEXTAUTH_SECRET ?? '',
          {}
        );
      }

      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (token.sub) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.isAdmin = token.isAdmin;

        return session;
      }
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
