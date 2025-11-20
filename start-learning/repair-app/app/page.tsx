"use client";
import Image from "next/image";
import Login from "./Signup/page";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormInput from "./components/Form";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("users/UserRepairList");
  };

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-700">
        <h1 className="font-bold text-2xl">Login</h1>
        <div className="w-md">
          <form
            className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
            action=""
          >
            {/* <label className="font-semibold text-xs">Username or Email</label>
          <label className="font-semibold text-xs" for="usernameField">Username or Email</label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
          />
          <label className="font-semibold text-xs mt-3">Password</label>
          <label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
          /> */}
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <div className="flex items-center justify-center h-12 mt-4 rounded font-semibold text-sm">
              <Button
                variant="primary"
                size="md"
                label="Login"
                fullWidth
                onClick={handleLogin}
              />
            </div>
            <div className="flex mt-6 justify-center text-xs">
              <a className="text-blue-400 hover:text-blue-500" href="#">
                Forgot Password
              </a>
              <span className="mx-2">|</span>
              <a className="text-blue-400 hover:text-blue-500" href="/Signup">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
