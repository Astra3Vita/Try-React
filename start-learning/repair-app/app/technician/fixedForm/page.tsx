"use client";
import { useState } from "react";
import Navbar from "../../components/NavBar";
import FormInput from "../../components/Form";
import FormButton from "../../components/Button";
import ImageUploader from "../../components/ImageUploader";

export default function UserRepairForm() {
  const navItems = [
    { label: "งานที่ได้รับมอบหมาย", href: "/technician/repairReceive" },
    { label: "Fixed Form", href: "/technician/fixedForm" },
    { label: "Technician Fixed List", href: "/technician/fixedList" },
    { label: "Profile", href: "/technician" },
    { label: "Logout", href: "/" },
  ];

  const [formData, setFormData] = useState({
    fixedDate: "",
    typeFixed: "",
    detailFixed: "",
    amountFixed: "",
    picturesFixed: [], // เก็บ array ของรูป
  });

  // ✅ handle สำหรับ text/date/textarea
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ handle สำหรับรูป (รับจาก ImageUploader)
  const handlePicturesChange = (files) => {
    setFormData({ ...formData, picturesFixed: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: 0–5 รูป
    if (formData.picturesFixed.length > 5) {
      alert("อัพโหลดได้สูงสุด 5 รูปเท่านั้น");
      return;
    }

    const payload = new FormData();
    payload.append("fixedDate", formData.fixedDate);
    payload.append("typeFixed", formData.typeFixed);
    payload.append("detailFixed", formData.detailFixed);
    payload.append("amountFixed", formData.amountFixed);

    formData.picturesFixed.forEach((file) => {
      payload.append("picturesFixed", file); // ✅ append หลายไฟล์
    });

    // ส่งไป backend
    // const res = await fetch("/api/upload", { method: "POST", body: payload });
    // const data = await res.json();
    console.log("ส่งข้อมูล:", formData);
  };

  return (
    <>
      <Navbar items={navItems} />
      <main>
        <h1 className="text-2xl font-bold m-4">Technician Fixed Form</h1>
      </main>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
        <FormInput
          label="Fixed Date"
          name="fixedDate"
          value={formData.fixedDate}
          onChange={handleChange}
          placeholder="Enter date"
          type="date"
          as="input"
        />
        <FormInput
          label="Type"
          name="typeFixed"
          value={formData.typeFixed}
          onChange={handleChange}
          placeholder="Enter place"
        />
        <FormInput
          label="Detail"
          name="detailFixed"
          value={formData.detailFixed}
          onChange={handleChange}
          placeholder="Enter Details"
          as="textarea"
        />
        <FormInput
          label="Amount"
          name="amountFixed"
          value={formData.amountFixed}
          onChange={handleChange}
          placeholder="Enter Amount"
        />
        <p className="font-semibold text-xs mb-2">Upload Pictures</p>
        <ImageUploader
          pictures={formData.picturesFixed}
          setPictures={handlePicturesChange}
        />
        <div className="flex items-center justify-center">
        <FormButton label="Submit" />
        <FormButton label="Cancel" variant="outline" />
        </div>
      </form>
    </>
  );
}
