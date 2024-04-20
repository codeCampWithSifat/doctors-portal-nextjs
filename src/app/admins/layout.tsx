import AdminHeader from "@/components/view/Header/AdminHeader";
import AdminSidebar from "@/components/view/Sidebar/AdminSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
};

export default AdminLayout;
