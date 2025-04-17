
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

interface DashboardNavProps extends React.HTMLAttributes<HTMLElement> {
  onMenuClick: () => void;
}

export function DashboardNav({ className, onMenuClick, ...props }: DashboardNavProps) {
  return (
    <nav
      className={cn(
        "flex items-center px-4 h-16 border-b bg-background",
        className
      )}
      {...props}
    >
      <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
      </Button>
      <div className="ml-auto flex items-center space-x-4">
        <Button
          variant="ghost"
          onClick={() => {
            // Handle logout here
            console.log("Logout clicked");
          }}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
}
