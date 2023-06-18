import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosInstance from "../axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("auth runs successfully");
        const payload = {
          username: credentials.email,
          password: credentials.password,
          grant_type: "password",
          client_id: "I6uLQiTzpcprqF6wgWreD8soCOnpRvCFp0uhjfy2",
          client_secret:
            "Ww6sHbXob9M4EL3WTTetAD6MzbRQex1F2XLKLAFuN4NJYu5foxBhsBT9GzoPrZMUozlnvlyzrrtJmHuBYFW7J5B9tsNBhmknJK7UK1iWwI16GJgyMpiUQBcWUd7Hkx3E",
        };

        try {
          const resUser = await axiosInstance.post("auth/token/", payload);
          console.log("ajeeeb hai!!!!!!!");
          if (resUser.data) {
            const userDets = await axiosInstance.get("users/account/", {
              data: {
                email: payload.username,
              },
            });
            console.log(resUser.data);
            const FinalUserDetails = {
              ...resUser.data,
              ...userDets.data,
            };
            console.log(FinalUserDetails);
            return FinalUserDetails;
          }
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account.provider === "google") {
        try {
          const payload = {
            username: user.name,
            email: user.email,
            image: user.image,
            provider: account.provider,
          };
          console.log("pata chalega");
          console.log(payload);
          console.log("item 2");
          const makeNewUser = await axiosInstance.post(
            "/users/account/",
            payload
          );
          const sendingData = {
            token: account?.access_token,
            backend: "google-oauth2",
            grant_type: "convert_token",
            client_id: "I6uLQiTzpcprqF6wgWreD8soCOnpRvCFp0uhjfy2",
            client_secret:
              "Ww6sHbXob9M4EL3WTTetAD6MzbRQex1F2XLKLAFuN4NJYu5foxBhsBT9GzoPrZMUozlnvlyzrrtJmHuBYFW7J5B9tsNBhmknJK7UK1iWwI16GJgyMpiUQBcWUd7Hkx3E",
          };
          console.log("item 3");

          const convertToken = await axiosInstance.post(
            "/auth/convert-token/",
            sendingData
          );
          console.log("item 4");

          const FinalUserDetails = {
            ...makeNewUser.data,
            ...convertToken.data,
          };
          return FinalUserDetails;
        } catch (error) {
          console.log(error);
          const getDetails = await axiosInstance.get("/users/account/", {
            data: {
              email: profile.email,
            },
          });
          const sendingData = {
            token: account?.access_token,
            backend: "google-oauth2",
            grant_type: "convert_token",
            client_id: "I6uLQiTzpcprqF6wgWreD8soCOnpRvCFp0uhjfy2",
            client_secret:
              "Ww6sHbXob9M4EL3WTTetAD6MzbRQex1F2XLKLAFuN4NJYu5foxBhsBT9GzoPrZMUozlnvlyzrrtJmHuBYFW7J5B9tsNBhmknJK7UK1iWwI16GJgyMpiUQBcWUd7Hkx3E",
          };
          const convertToken = await axiosInstance.post(
            "/auth/convert-token/",
            sendingData
          );
          console.log(getDetails.data);
          return getDetails.data;
        }
      } else {
        console.log("object not found");
        return {
          ...profile,
          ...account,
        };
      }
    },
  },
});
