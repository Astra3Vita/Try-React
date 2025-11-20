"use client";

import React from "react";
import Navbar from "../../components/NavBar";
import Table from "../../components/Table";
import { useState } from "react";
import Search from "@/app/components/Search";

const page = () => {
  const navItems = [
    { label: "งานที่ได้รับมอบหมาย", href: "/technician/repairReceive" },
    { label: "Fixed Form", href: "/technician/fixedForm" },
    { label: "Technician Fixed List", href: "/technician/fixedList" },
    { label: "Profile", href: "/technician" },
    { label: "Logout", href: "/" },
  ];
  const columnFixed = [
    { header: "ID", accessor: "id" },
    { header: "Date Request Repair", accessor: "dateRequestRepair" },
    { header: "Place", accessor: "placeRequestRepair" },
    { header: "Pictures", accessor: "picturesRequestRepair" },
    { header: "Detail", accessor: "detailRequestRepair" },
    { header: "Status", accessor: "statusRequestRepair" },
    { header: "Date Receive Repair", accessor: "dateReceiveRepair" },
    { header: "Date Fixed", accessor: "fixedDate" },
    { header: "Type", accessor: "typeFixed" },
    { header: "Pictures", accessor: "picturesFixed" },
    { header: "Detail", accessor: "detailFixed" },
    { header: "Amount", accessor: "amountFixed" },
  ];

  const datas = []; // ตัวอย่างข้อมูลว่าง;
  const [employees] = useState([
    { id: 1, name: "Alice", department: "IT", email: "alice@example.com" },
    { id: 2, name: "Bob", department: "HR", email: "bob@example.com" },
    {
      id: 3,
      name: "Charlie",
      department: "Finance",
      email: "charlie@example.com",
    },
  ]);

  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Department", accessor: "department" },
    { header: "Email", accessor: "email" },
  ];

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(lowerQuery) ||
        emp.department.toLowerCase().includes(lowerQuery) ||
        emp.email.toLowerCase().includes(lowerQuery)
    );
    setFilteredEmployees(filtered);
  };

  return (
    <>
      <Navbar items={navItems} />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Fixed List</h1>
        <Search placeholder="Search employees..." onSearch={handleSearch} />
        <div className="p-4">
          <Table columns={columnFixed} data={datas} />
        </div>
      </main>
    </>
  );
};

export default page;
