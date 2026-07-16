import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar({ menu, children }) {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white shadow-sm">
      <SidebarHeader />

      <SidebarMenu menu={menu} />

      <SidebarFooter>{children}</SidebarFooter>
    </aside>
  );
}
