import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "Email",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "Enter your username" },
              password: { label: "Password", type: "password",placeholder:"Enter your  password" }
            },
            async authorize(credentials, req) {
              console.log(credentials)

              const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        
              if (user) {
                return user
              } else {
                return null        
              }
            }
          }),
          GoogleProvider({
            clientId: "kdjaf",
            clientSecret: "ahfaf"
          })
    ],
    secret:process.env.NEXTAUTH_SECRET
});

export { handler as POST, handler as GET}