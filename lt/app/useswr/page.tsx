"use client"
import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetchData = async (url:string) => {
  const res = await axios.get(url);
  return res.data 
};

export default function page() {
    const { data, error } = useSWR(
      "https://jsonplaceholder.typicode.com/users",
      fetchData,
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }
    );
    if(error){
        return <div>Lấy giữ liệu thất bại</div>
    }
    if(!data) return <div>Data loading....</div>
  return <div>sử dụng SWR !
    {data.map((item:any)=>{
        return <li key={item.id}>{item.name}</li>
    })}
  </div>;
}
