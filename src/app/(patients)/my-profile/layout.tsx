import React from "react";
import PatientHeader from "@/components/view/Header/PatientHeader";
import PatientSidebar from "@/components/view/Sidebar/PatientSidebar";

const PatientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PatientHeader />
      <PatientSidebar>{children}</PatientSidebar>
    </div>
  );
};

export default PatientLayout;
