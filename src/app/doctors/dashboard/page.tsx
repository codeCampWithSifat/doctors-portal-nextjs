import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

const DoctorDashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log(session, "Doctor Session");
  return (
    <div>
      <h2>this is doctor dashboard component</h2>
    </div>
  );
};

export default DoctorDashboard;
