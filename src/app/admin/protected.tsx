'use client';
import { useState, useEffect } from "react";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_PROTECTED_PASSWORD!;
const EXPIRATION_TIME = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedPassword = localStorage.getItem("adminPassword");
    const storedTimestamp = localStorage.getItem("loginTimestamp");

    if (storedPassword && storedTimestamp) {
      const currentTime = new Date().getTime();
      const timestamp = parseInt(storedTimestamp, 10);

      if (currentTime - timestamp < EXPIRATION_TIME && storedPassword === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("adminPassword");
        localStorage.removeItem("loginTimestamp");
      }
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      localStorage.setItem("adminPassword", password);
      localStorage.setItem("loginTimestamp", new Date().getTime().toString());
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
     <div className="fixed top-0 left-0 h-screen w-full overflow-hidden flex items-center justify-center z-50 bg-white">
      <div className="flex flex-col items-center justify-center py-2">
          <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border rounded mb-4"
              placeholder="Enter password"
          />
          <button
              onClick={handleLogin}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
              Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
  </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedPage;