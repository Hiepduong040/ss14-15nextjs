"use client";

import React, { useState } from "react";
import axios from "axios";

export default function ProductFilter({ products }: { products: any[] }) {
  const [filteredProducts, setFilteredProducts] = useState(products || []);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const handleFilter = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const filtered = res.data.filter(
        (item: any) => item.price >= minPrice && item.price <= maxPrice
      );
      setFilteredProducts(filtered);
    } catch (error) {
      console.error(error);
      setFilteredProducts([]);
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Price min"
          value={minPrice === 0 ? "" : minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Price max"
          value={maxPrice === Infinity ? "" : maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <button onClick={handleFilter}>Lọc</button>
      </div>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((item: any) => (
          <ul key={item.id}>
            <li>Title: {item.title}</li>
            <li>Price: {item.price}</li>
*********************************************************************
          </ul>
        ))
      ) : (
        <p>Không có sản phẩm nào phù hợp với tiêu chí lọc.</p>
      )}
    </div>
  );
}
