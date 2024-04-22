import PublicHeader from "@/components/view/Header/PublicHeader";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session, "session public");
  return (
    <div>
      <PublicHeader />
    </div>
  );
};

export default HomePage;
