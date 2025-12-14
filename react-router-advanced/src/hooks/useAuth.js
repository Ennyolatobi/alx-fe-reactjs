// src/hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  // Simulate authentication status
  const [isAuth, setIsAuth] = useState(true); // or false to test

  return { isAuth };
}
