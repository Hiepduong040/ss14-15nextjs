import React from "react";

async function getProduct() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const products = await getProduct();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Danh sách sản phẩm:
      </h1>
      <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item: any) => (
          <li
            key={item.id}
            className="bg-gray-50 shadow-sm rounded-lg overflow-hidden transition-shadow hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full  object-cover transition-transform hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-700">
                {item.title}
              </h2>
              <p className="text-gray-500 mt-2">Giá: ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
