import RoleLayout from "@/components/layout/RoleLayout";
import SignOutButton from "@/components/layout/SignOutButton";
import { SIDEBAR_MENUS } from "@/lib/sidebarMenu";

export default function StudentLayout({ children }) {
  return (
    <RoleLayout menu={SIDEBAR_MENUS.teacher} footer={<SignOutButton />}>
      {children}
    </RoleLayout>
  );
}
