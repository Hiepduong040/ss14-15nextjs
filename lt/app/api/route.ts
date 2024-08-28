// tạo ra các phương thức

import { NextResponse } from "next/server";

export async function GET(){
    console.log("hello");
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return NextResponse.json(data)
    
}




