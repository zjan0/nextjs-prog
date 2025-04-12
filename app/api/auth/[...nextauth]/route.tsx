import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import Login from "../../../login/page";
export const authOptions={
    providers: [
        CredentialsProvider({
            credentials: {username:{label: "name", type: "text"}, password: { label: "Password", type: "password" },},
            async authorize(credentials, req) {
              const user = await prisma.account.findUnique({
                where: { username: credentials?.username },
              });
              <Login/>
      
              if (user) {
                <Login/>
                const matchingPassword =
                  user.password &&
                  credentials?.password &&
                  (await bcrypt.compare(credentials.password, user.password));
                return user;
              }
              },
        })
    ]
}
export const handler=NextAuth(authOptions);
export{handler as GET,handler as POST};
/*export default function randomvaluessfdsjf()
{
  const authOptions={
    providers: [
        CredentialsProvider({
            credentials: {username:{label: "name", type: "text"}, password: { label: "Password", type: "password" },},
            async authorize(credentials, req) {
              const user = await prisma.account.findUnique({
                where: { username: credentials?.username },
              });
      
              if (user) {
                if (user.provider !== "Credentials")
                  throw new Error(`Please sign in with ${user.provider}`);
      
                const matchingPassword =
                  user.password &&
                  credentials?.password &&
                  (await bcrypt.compare(credentials.password, user.password));
                return user;
              }
              },
        })
    ]
}
}*/