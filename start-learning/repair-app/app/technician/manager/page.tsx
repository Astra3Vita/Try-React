// ดูงานแจ้งซ่อมที่มอบหมายให้ช่างเทคนิค
// report tasks assigned to technicians
"use client";
// pages/users.js
import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Navbar from "../../components/NavBar";
import Button from "@/app/components/Button";

export default function UsersPage() {
  const navItems = [
    { label: "Dashboard", href: "/technician/manager/dashboard" },
    { label: "Repair List Assign", href: "/technician/manager/" },
    { label: "Technician List", href: "/technician/manager/technicianList" },
    { label: "Fixed Lists", href: "/technician/manager/fixedList" },
    { label: "Profile", href: "/technician/manager/profile" },
    { label: "Logout", href: "/" },
  ];
  const [users, setUsers] = useState([]);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "nameRequestRepair" },
    { header: "Place", accessor: "placeRequestRepair" },
    { header: "Pictures", accessor: "picturesRequestRepair" },
    { header: "Detail", accessor: "detailRequestRepair" },
    { header: "Status", accessor: "statusRequestRepair" },
    { header: "Date Request Repair", accessor: "dateRequestRepair" },
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
        }));
        setUsers(formatted);
      });
  }, []);

  const handleAssigned = () => {
    // alert(`Edit employee: ${employee.name}`);
    alert(`มอบหมายให้ช่างเทคนิค`);
  };

  return (
    <>
      <Navbar items={navItems} />

      <div className="p-6">
        <h1 className="text-xl font-bold mb-2">Repair List</h1>

        <Table columns={columns} data={users} showAssign onAssigned={handleAssigned} />
      </div>
    </>
  );
}
