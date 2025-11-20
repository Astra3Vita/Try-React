"use client";
import { useState } from "react";
import FormInput from "../components/Form";
import Button from "../components/Button";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ ตรวจสอบรหัสผ่านตรงกัน
    if (formData.password !== formData.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }

    // ✅ ส่งข้อมูลไป backend
    const payload = {
      firstName: formData.firstName,
      surname: formData.lastName,
      department: formData.department,
      role: formData.role,
      email: formData.email,
      password: formData.password,
    };

    // ตัวอย่างการส่งไป API
    // const res = await fetch("/api/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
    // const data = await res.json();
    // console.log(data);

    console.log("Sign Up Data:", payload);
    alert("สมัครสมาชิกเรียบร้อย!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          placeholder="กรอกชื่อ"
        />

        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          placeholder="กรอกนามสกุล"
        />

        <FormInput
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          type="text"
          placeholder="กรอกแผนก"
        />

        <FormInput
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          type="text"
          placeholder="กรอกตำแหน่งงาน"
        />

        <FormInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="กรอกอีเมล"
        />

        <FormInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="กรอกรหัสผ่าน"
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="กรอกรหัสผ่านอีกครั้ง"
        />

        <Button
          type="submit"
          label="Sign up"
          fullWidth
        />
      </form>
    </div>
  );
}
