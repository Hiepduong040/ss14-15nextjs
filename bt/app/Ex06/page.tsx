"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api_user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {users.map((item: any) => {
        return (
          <ul key={item.id}>
            <li>Name: {item.name}</li>
            <li>Email: {item.email}</li>
            <li>Address: {item.address.street}</li>
            ****************************************************************************
          </ul>
        );
      })}
    </div>
  );
}
