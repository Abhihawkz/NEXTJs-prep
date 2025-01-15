import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const client = new PrismaClient()

export function GET(){
    return NextResponse.json({username:"Healthcheck",email:"healthcheck"})
}

export async function POST(req:NextRequest){
    const body = await req.json()

    const res = await client.user.create({data:{
        username:body.username,
        password:body.password
    }})
    
 
 
    console.log(body);
    console.log(req.headers.get("authorization"))
    console.log(req.nextUrl.searchParams.get("name"))
    return NextResponse.json({res})

}