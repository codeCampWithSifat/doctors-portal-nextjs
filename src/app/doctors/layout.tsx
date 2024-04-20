import React from "react";
import DoctorHeader from "@/components/view/Header/DoctorHeader";
import DoctorSidebar from "@/components/view/Sidebar/DoctorSidebar";

const DoctorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DoctorHeader />
      <DoctorSidebar>{children}</DoctorSidebar>
    </div>
  );
};

export default DoctorLayout;
