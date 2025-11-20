"use client";
// pages/users.js
import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Navbar from "../../components/NavBar";
import Button from "@/app/components/Button";

export default function technicianListPage() {
  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard" },
    { label: "Repair List", href: "/admin/repairList" },
    { label: "Technician List", href: "/admin/technicianList" },
    { label: "Employee List", href: "/admin/employeeList" },
    { label: "Profile", href: "/admin" },
    { label: "Logout", href: "/" },
  ];
  const [users, setUsers] = useState([]);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Status", accessor: "status" },
  ];

  useEffect(() => {
    // ดึงข้อมูลจาก JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // map ให้ตรงกับ columns
        const formatted = data.map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email,
        }));
        setUsers(formatted);
      });
  }, []);

  return (
    <>
      <Navbar items={navItems} />

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start justify-start h-24 rounded-base bg-neutral-secondary-soft">
            <h1 className="text-xl font-bold mb-2">Technician Table</h1>
          </div>
          <div className="flex items-center justify-end h-24 rounded-base bg-neutral-secondary-soft">
            <p className="text-fg-disabled"></p>
            <Button
              label="Add Technician"
              onClick={() => alert("Add Technician")}
            />
          </div>
        </div>

        <Table columns={columns} data={users} showActions />
      </div>
    </>
  );
}
