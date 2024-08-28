import axios from "axios";
import React from "react";

async function getData() {
  try {
    const res = await axios.get("https://example.com/invalid-endpoint");
    return res.data;
  } catch (error:any) {
    if (error.response) {
      const { status } = error.response;
      if (status === 404) {
        throw new Error("404- trang không tồn tại");
      } else {
        throw new Error("500- lỗi máy chủ");
      }
    }
  }
}

export default async function Page() {
  let data;
  let errorMessage = "";

  try {
    data = await getData();
  } catch (error: any) {
    errorMessage = error.message;
  }

  return (
    <div className="container mx-auto p-4">
      {errorMessage ? (
        <div >
          <h1>{errorMessage}</h1>
        </div>
      ) : (
        <div>
          <p>không có lỗi</p>
        </div>
      )}
    </div>
  );
}
