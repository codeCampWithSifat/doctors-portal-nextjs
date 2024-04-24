import Sidebar from "@/components/ui/Sidebar/Sidebar";

const DoctorSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/doctors/dashboard" },
    { key: "2", label: "My Availability", href: "/doctors/my-availability" },
  ];
  return (
    <div>
      <Sidebar items={items}>{children}</Sidebar>
    </div>
  );
};

export default DoctorSidebar;
