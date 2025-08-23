import React from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * useAuth
 * Reads auth state from localStorage key "authToken".
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    () => !!localStorage.getItem("authToken")
  );

  React.useEffect(() => {
    const handleStorage = () => {
      setIsAuthenticated(!!localStorage.getItem("authToken"));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // If not authenticated, redirect to /login and remember where we came from
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Otherwise render the protected content
  return children;
}
