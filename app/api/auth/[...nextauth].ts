import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials) {
          return null;
        }

        const storedData = JSON.parse(
          localStorage.getItem("authDetails") || "{}"
        );

        if (
          storedData.email === credentials.email &&
          storedData.password === credentials.password
        ) {
          // If login is successful, return the user object
          return { id: "1", name: "User", email: credentials.email } as User;
        } else {
          // If login fails, return null
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
});
