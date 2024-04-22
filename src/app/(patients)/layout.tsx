import PatientHeader from "@/components/view/Header/PatientHeader";
import React from "react";

const PatientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
     <PatientHeader />
      {children}
    </div>
  );
};

export default PatientLayout;