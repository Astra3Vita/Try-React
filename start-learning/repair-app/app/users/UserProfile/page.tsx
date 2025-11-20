"use client";
import { useState } from "react";
import ImageUploader from "../../components/ImageUploader";

export default function ExampleForm() {
  const [pictures, setPictures] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    pictures.forEach((file) => {
      formData.append("pictures", file);
    });

    // fetch("/api/upload", { method: "POST", body: formData });
    console.log("ส่งไฟล์:", pictures);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <ImageUploader pictures={pictures} setPictures={setPictures} />

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
}
