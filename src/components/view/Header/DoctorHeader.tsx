import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";

const DoctorHeader = () => {
  const items = [
    { key: "1", label: "My Profile", href: "/doctors/my-profile" },
  ];
  return <Navbar items={items} />;
};

export default DoctorHeader;
