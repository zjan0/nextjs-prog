import NextAuth from "next-auth/next";
import {PrismaClient} from '@prisma/client'
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
const prisma=new PrismaClient();
const authOptions=
{
  providers:
  [
    CredentialsProvider({
      name:"credentials",
      credentials:{},
      async authorize(credentials)
      {
        const{username,password}=credentials;
        console.log(username,password,credentials)
        const user = await prisma.account.findFirst({
          where: { account_username: username },
        });
        /*if(!user)
        {
          return null;
        }*/
        const matchingpassword=await bcrypt.compare(password,user.account_password);

        //const matchingpassword=await bcrypt.compare(passwords,user.account_password);
        /*if(!matchingpassword)
        {
          return null;
        }
          return user;*/
        console.log(user);
        if(matchingpassword&&user)
        {
          return user;
        }
        else
        {
          return null;
        }
        /*const user = await prisma.account.findUnique({
          where: { username: credentials?.username },
        });*/
      },
    }),
  ],
  callbacks:
  {
    /*async jwt({token,account,profile})
    {
      if (account) {
      token.accessToken = account.access_token;
      token.id = profile.id;
    }
    return token;
    },*/
    async jwt({token,user})
    {
      console.log("test2");
      console.log(user);
      if(user)
      {
      const{account_username/*,id*/}=user;
      console.log(account_username);
      token.name=account_username;
      //token.id=id;
      }
      console.log(token);
      return token;
    },
    async session({session, token})
    {
      console.log("testing value");
      console.log(token);
      session.user.name=token.name;
      //session.user.id=token.id;
      console.log(session);
      return session;
    }
    /*session:()=>
    async function()
    {
      return session;
    }*/
  }
  /*session:{
    strategy:"jwt",
  },
  secret:process.env.NEXTAUTH_SECRET,
  pages:{signIn: "/api/auth/signin",}*/
};
const handler=NextAuth(authOptions);
export{handler as GET,handler as POST};
/*export const authOptions={
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
export{handler as GET,handler as POST};*/
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
}*//*const user = await prisma.account.findUnique({
          where: { username: 'abc' },
        });*/
        /*const user = await prisma.account.findUnique({
          where: {
            email: 'alice@prisma.io',
          },
        });*/