import PublicHeader from "@/components/view/Header/PublicHeader";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PublicHeader />
      {children}
    </div>
  );
};

export default PublicLayout;
