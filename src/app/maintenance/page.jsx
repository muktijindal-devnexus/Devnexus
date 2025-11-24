"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MaintenancePage() {
  const [checking, setChecking] = useState(false);
  const router = useRouter();

  // Backend URL health endpoint
  const HEALTH_URL = "https://your-backend.com/health";

  const checkServer = async () => {
    try {
      setChecking(true);

      const res = await fetch(HEALTH_URL, { cache: "no-store" });

      if (res.ok) {
        const data = await res.json();

        if (data?.status === "ok" || data?.healthy === true) {
          router.push("/"); // 🔥 Redirect back to home when healthy
        }
      }
    } catch (e) {
      // ignore — server still down
    }

    setChecking(false);
  };

  useEffect(() => {
    // first check immediately
    checkServer();

    // auto-refresh every 10 seconds
    const interval = setInterval(checkServer, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">We’ll be back soon!</h1>

      <p className="text-gray-600 mt-4 max-w-md">
        Our servers are temporarily unavailable.  
        We’re actively working to restore the service.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Error Code: 503 — Service Unavailable
      </p>

      <div className="mt-8 text-gray-500 text-sm">
        {checking ? "Checking server..." : "Retrying in 10 seconds..."}
      </div>
    </div>
  );
}
