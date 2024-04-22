import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/services" },
    { key: "4", label: "Contact", href: "/contact-us" },
    { key: "5", label: "About", href: "/about-us" },
  ];
  return (
    <div>
      <Navbar items={items} />
    </div>
  );
};

export default PublicHeader;
