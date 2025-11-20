"use client";
// pages/users.js
import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Navbar from "../../components/NavBar";
import Button from "@/app/components/Button";
import Search from "@/app/components/Search";

export default function UsersPage() {
  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard" },
    { label: "Repair List", href: "/admin/repairList" },
    { label: "Technician List", href: "/admin/technicianList" },
    { label: "Employee List", href: "/admin/employeeList" },
    { label: "Profile", href: "/admin" },
    { label: "Logout", href: "/" },
  ];
  const [users, setUsers] = useState([]);

  // const columnEmployees = [
  //   { header: "ID", accessor: "id" },
  //   { header: "Name", accessor: "name" },
  //   { header: "Email", accessor: "email" },
  //   { header: "Department", accessor: "department" },
  //   { header: "Role", accessor: "role" },
  //   { header: "Privilege", accessor: "privilege" },
  // ];

  // useEffect(() => {
  //   // ดึงข้อมูลจาก JSONPlaceholder
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // map ให้ตรงกับ columns
  //       const formatted = data.map((u) => ({
  //         id: u.id,
  //         name: u.name,
  //         email: u.email,
  //         // city: u.address.city,
  //       }));
  //       setUsers(formatted);
  //     });
  // }, []);

  const handleEdit = () => {
    // alert(`Edit employee: ${employee.name}`);
    alert(`Edit employee`);
  };

  // const handleDelete = (employee) => {
  //   alert(`Delete employee: ${employee.name}`);
  // };

  const [employees] = useState([
    { id: 1, name: "Alice", department: "IT", email: "alice@example.com" },
    { id: 2, name: "Bob", department: "HR", email: "bob@example.com" },
    { id: 3, name: "Charlie", department: "Finance", email: "charlie@example.com" },
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

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start justify-start h-24 rounded-base bg-neutral-secondary-soft">
            <h1 className="text-xl font-bold mb-2">Employee Table</h1>
            <Search placeholder="Search employees..." onSearch={handleSearch} />
          </div>
          <div className="flex items-center justify-end h-24 rounded-base bg-neutral-secondary-soft">
            <p className="text-fg-disabled">
              {/* <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg> */}
            </p>
            <Button
              label="Add Employee"
              onClick={() => alert("Add empolyee")}
            />
          </div>
        </div>

        <Table
          columns={columns}
          data={filteredEmployees}
          showActions
          onEdit={handleEdit}
          // onDelete={handleDelete}
        />
      </div>
    </>
  );
}
