
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (register(email, password)) {
      toast.success("Account created successfully");
      navigate("/dashboard");
    } else {
      toast.error("Email already exists");
    }
  };

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-gray-500">Enter your information to get started</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-full" type="submit">
          Create account
        </Button>
      </form>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-primary underline-offset-4 hover:underline"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
