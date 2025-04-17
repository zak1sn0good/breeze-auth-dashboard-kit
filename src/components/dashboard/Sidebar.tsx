
import { cn } from "@/lib/utils";
import { HomeIcon, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export function Sidebar({ className, isOpen }: SidebarProps) {
  const location = useLocation();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-lg font-semibold">My App</span>
      </div>
      <nav className="space-y-1 p-4">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            to={href}
            className={cn(
              "flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              location.pathname === href
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
