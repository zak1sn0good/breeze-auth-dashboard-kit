
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { Sidebar } from "@/components/dashboard/Sidebar";
import Heading from "@/components/common/Heading";
import { useState } from "react";
import GenerateButton from "@/components/common/GenerateButton";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1">
        <DashboardNav onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="container p-6 space-y-2">
          <Heading/>
          <GenerateButton onClick={() => alert("Generate button clicked!")}/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
