"use client"
import { createUser } from "./actions/user";
import { useState } from "react";

export default function Home() {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  return (
   <div>
    <input placeholder="username" type="text" value={username} onChange={(e)=>{
      setUsername(e.target.value)
    }}></input>
    <input placeholder="password" type="password" value={password} onChange={(e)=>{
      setPassword(e.target.value)
    }}></input>
    <button onClick={()=>{
      createUser(username,password)
    }}>Signup</button>
   </div>
  );
}
