"use client";
import { useState } from "react";
import Navbar from "../../components/NavBar";
import FormInput from "../../components/Form";
import FormButton from "../../components/Button";
import ImageUploader from "../../components/ImageUploader";

export default function UserRepairForm() {
  const navItems = [
    { label: "Repair List", href: "/users/UserRepairList" },
    { label: "Repair Form", href: "/users/UserRepairForm" },
    { label: "Profile", href: "/users/UserProfile" },
    { label: "Logout", href: "/" },
  ];

  const [formData, setFormData] = useState({
    dateRequestRepair: "",
    detailRequestRepair: "",
    placeRequestRepair: "",
    picturesRequestRepair: [], // เก็บ array ของรูป
  });

  // ✅ handle สำหรับ text/date/textarea
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ handle สำหรับรูป (รับจาก ImageUploader)
  const handlePicturesChange = (files) => {
    setFormData({ ...formData, picturesRequestRepair: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: 0–5 รูป
    if (formData.picturesRequestRepair.length > 5) {
      alert("อัพโหลดได้สูงสุด 5 รูปเท่านั้น");
      return;
    }

    const payload = new FormData();
    payload.append("dateRequestRepair", formData.dateRequestRepair);
    payload.append("deteilRequestRepair", formData.detailRequestRepair);
    payload.append("placeRequestRepair", formData.placeRequestRepair);

    formData.picturesRequestRepair.forEach((file) => {
      payload.append("pictures", file); // ✅ append หลายไฟล์
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
        <h1 className="text-2xl font-bold m-4">User Repair Form</h1>
      </main>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
        <FormInput
          label="Create Date Form"
          name="dateRequestRepair"
          value={formData.dateRequestRepair}
          onChange={handleChange}
          placeholder="Enter date"
          type="date"
          as="input"
        />
        <FormInput
          label="Place"
          name="placeRequestRepair"
          value={formData.placeRequestRepair}
          onChange={handleChange}
          placeholder="Enter place"
        />
        <FormInput
          label="Detail"
          name="detailRequestRepair"
          value={formData.detailRequestRepair}
          onChange={handleChange}
          placeholder="Enter Details"
          as="textarea"
        />
        {/* <FormInput
        label="Upload Pictures"
        name="pictures"
        onChange={handleChange}
        type="file"
        multiple
      /> */}
        {/* ใช้ ImageUploader แยกออกมา */}
        <p className="font-semibold text-xs mb-2">Upload Pictures</p>
        <ImageUploader
          pictures={formData.picturesRequestRepair}
          setPictures={handlePicturesChange}
        />
        <FormButton label="Submit" />
      </form>
    </>
  );
}
