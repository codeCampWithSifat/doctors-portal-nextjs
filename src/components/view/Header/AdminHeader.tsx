import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";

const AdminHeader = () => {
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
  ];
  return <Navbar items={items} />;
};

export default AdminHeader;
