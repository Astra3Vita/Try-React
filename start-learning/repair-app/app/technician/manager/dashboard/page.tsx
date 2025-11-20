
// dashboard for technician manager to monitor and assign tasks
"use client";
import React from 'react'
import { useState } from "react";
import Navbar from "../../../components/NavBar";

const page = () => {
    const navItems = [
    { label: "Dashboard", href: "/technician/manager/dashboard" },
    { label: "Repair List Assign", href: "/technician/manager/" },
    { label: "Technician List", href: "/technician/manager/technicianList" },
    { label: "Fixed Lists", href: "/technician/manager/fixedList" },
    { label: "Profile", href: "/technician/manager/profile" },
    { label: "Logout", href: "/" },
  ];

  return (
    <>
    <Navbar items={navItems} />
    <div>page</div>
    
    </>
  )
}

export default page