import Sidebar from "@/components/ui/Sidebar/Sidebar";

const PatientSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "My Appointments", href: "/patients" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
  ];
  return (
    <div>
      <Sidebar items={items}>{children}</Sidebar>
    </div>
  );
};

export default PatientSidebar;
