"use client";
import { signIn } from "next-auth/react"

export default function(){
    return <div>
        <input type="text" placeholder="enter your username"/>
        <input type="text" placeholder="enter your password"/>
        <button onClick={()=>{
            signIn("gmail");
        }}>Login in with Gmail</button>
    </div>
}