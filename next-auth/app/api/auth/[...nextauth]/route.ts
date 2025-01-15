import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "Email",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "Enter your username" },
              password: { label: "Password", type: "password",placeholder:"Enter your  password" }
            },
            async authorize(credentials, req) {
              const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        
              if (user) {
                return user
              } else {
                return null        
              }
            }
          })
    ]
});

export {handler as GET, handler as POST}