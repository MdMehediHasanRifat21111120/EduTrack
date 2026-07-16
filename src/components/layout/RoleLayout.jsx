import Sidebar from "./Sidebar";

export default function RoleLayout({
  menu,
  children,
  footer,
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar menu={menu}>
        {footer}
      </Sidebar>

      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );
}