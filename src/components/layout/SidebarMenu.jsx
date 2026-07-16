import SidebarItem from "./SidebarItem";

export default function SidebarMenu({ menu }) {
  return (
    <nav className="flex-1 space-y-2 p-4">
      {menu.map((item) => (
        <SidebarItem
          key={item.id}
          href={item.href}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </nav>
  );
}