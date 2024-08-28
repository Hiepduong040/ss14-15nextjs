import { NextResponse } from 'next/server'
import React from 'react'

export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return NextResponse.json(data)
}
