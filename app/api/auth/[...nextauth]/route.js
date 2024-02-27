import { connectMongoDB } from "@/lib/Mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("user: " + user);
      console.log("account: " + account);

      if (account.provider === 'google') {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExist = await User.findOne({ email });

          if (!userExist) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "accept": "application/json"
              },
              body: JSON.stringify({ name, email })
            });

            if (!res.ok) {
              throw new Error("failed to sign in");
            }
            return user;
          }
        } catch (error) {
          console.log("failed to sign in", error);
        }
      }
      return user;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };