"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/api")
          .then((res) => res.json())
          .then((data) => {
             setUsers(data);
          })
          .catch((err) => console.log(err));
    },[])
  return (
    <div>trang danh sách user
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}



