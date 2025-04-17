
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1">
        <DashboardNav onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="container p-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-4 text-muted-foreground">
            Welcome to your dashboard! This is where you'll see your content.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
