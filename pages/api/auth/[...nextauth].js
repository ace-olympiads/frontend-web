import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import axios from 'axios';

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    InstagramProvider({
      clientId: "YOUR_INSTAGRAM_CLIENT_ID",
      clientSecret: "YOUR_INSTAGRAM_CLIENT_SECRET",
    }),
  ],

  callbacks: {
    async signIn(user, account, profile) {
      if (user) {
        const payload = {
            provider: user.account.provider,
            code: user.account.access_token,
          };
        try {
          const response = await axios.post('http://localhost:8000/social-auth-callback/', payload);

          const { user, token } = response.data;
          signIn('credentials', {
            username: user.username,
            email: user.email,
            userId: user.id,
            token,
          });

          return false;
        } catch (error) {
          console.error(error);
        }
      }
      return true;
    },
  },
});
