"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Home() {

  const serssion = useSession()
  
      return (
      <div>{JSON.stringify(serssion)}
          {serssion.status === "authenticated" && <button onClick={()=>{
              signOut()
          }}>Logout</button>}
          {serssion.status === "unauthenticated" && <button onClick={()=>{
              signIn()
          }}>Signin</button>}
      </div>
    );
}
