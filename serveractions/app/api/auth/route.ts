import { NextRequest, NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({username:"Healthcheck",email:"healthcheck"})
}

export async function POST(req:NextRequest){
    const body = await req.json()
    console.log(body);
    console.log(req.headers.get("authorization"))
    console.log(req.nextUrl.searchParams.get("name"))
    return NextResponse.json({body})

}