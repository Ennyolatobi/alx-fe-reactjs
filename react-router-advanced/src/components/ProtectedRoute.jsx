// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // import the hook

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth(); // use the hook

  if (!isAuth) {
    return <Navigate to="/" replace />; // redirect if not authenticated
  }

  return children; // render children if authenticated
}

export default ProtectedRoute;
