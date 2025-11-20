"use client";
import { useState } from "react";
import Navbar from "../components/NavBar";
import FormInput from "../components/Form";
import Button from "../components/Button";

export default function ProfileTechnicianPage() {
  const navItems = [
    { label: "งานที่ได้รับมอบหมาย", href: "/technician/repairReceive" },
    { label: "Fixed Form", href: "/technician/fixedForm" },
    { label: "Technician Fixed List", href: "/technician/fixedList" },
    { label: "Profile", href: "/technician" },
    { label: "Logout", href: "/" },
  ];

  const [profile, setProfile] = useState({
    firstName: "สมชาย", // ตัวอย่างข้อมูลเริ่มต้น
    lastName: "ใจดี",
    department: "ซ่อมบำรุง",
    role: "ช่างเทคนิค",
    email: "somchai@example.com",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", profile.firstName);
    formData.append("lastName", profile.lastName);
    formData.append("department", profile.department);
    formData.append("role", profile.role);
    formData.append("email", profile.email);

    // ส่งไป backend
    // fetch("/api/profile", { method: "POST", body: formData });

    console.log("Profile submitted:", profile);
    alert("บันทึกโปรไฟล์เรียบร้อย!");
  };

  return (
    <>
      <Navbar items={navItems} />
      <main>
        <h1 className="text-2xl font-bold text-center my-6">Profile</h1>
      </main>
      {/* <div className="flex items-center justify-center min-h-screen"> */}
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
        >
          <FormInput
            label="First name"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            type="text"
          />
          <FormInput
            label="Last name"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            type="text"
          />
          <FormInput
            label="Department"
            name="department"
            value={profile.department}
            onChange={handleChange}
            type="text"
          />
          <FormInput
            label="Role"
            name="role"
            value={profile.role}
            onChange={handleChange}
            type="text"
          />

          <FormInput
            label="อีเมล"
            name="email"
            value={profile.email}
            onChange={handleChange}
            type="email"
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            label="Save Profile"
            fullWidth
          />
        </form>
      </div>
    </>
  );
}
