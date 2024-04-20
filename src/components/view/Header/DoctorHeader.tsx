import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";

const DoctorHeader = () => {
  const items = [
    { key: "1", label: "Doctors", href: "/" },
    { key: "2", label: "About", href: "/about-us" },
    { key: "3", label: "Contact", href: "/contact-us" },
  ];
  return <Navbar items={items} />;
};

export default DoctorHeader;
