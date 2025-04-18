import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";     // adjust the path if needed

import Index      from "@/pages/Index";
import Login      from "@/pages/Login";
import Register   from "@/pages/Register";
import Dashboard  from "@/pages/Dashboard";
import NotFound   from "@/pages/NotFound";
import { AuthState } from "@/store/useAuthStore";

//  A little wrapper that checks `currentUser` and redirects to /login if none
const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const currentUser = useAuthStore((state: AuthState) => state.currentUser);
  return currentUser
    ? children
    : <Navigate to="/login" replace />;
};

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"               element={<Index />} />
      <Route path="/login"          element={<Login />} />
      <Route path="/register"       element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="*"               element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
