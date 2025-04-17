
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-secondary p-4 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold sm:text-6xl">Welcome to My App</h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg">
          A modern application with authentication and dashboard features.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link to="/register">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
