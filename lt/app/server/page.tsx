"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return data;
}

export default async function page() {
    const route = useRouter();
    const handleClick = () => {
      route.push("/useswr");
    };
    const users = await getUser();
  return (
    <div>data feching server with fecth
        <button onClick={handleClick}>click</button>
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name} </li>
        })}
    </div>

  )
}
