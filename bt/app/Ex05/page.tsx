"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api_product")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log("err", error));
  }, []);
  return (
    <div>
      Danh sach san pham
      {products.map((item: any) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
}
