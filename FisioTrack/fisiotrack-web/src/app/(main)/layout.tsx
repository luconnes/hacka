"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  // Render nothing while redirecting
  if (!isAuthenticated) {
    return <div className="w-full h-screen bg-background" />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-background">
      {/* Fixed Sidebar */}
      <Sidebar />
      {/* Scrollable content area — only vertical, no horizontal */}
      <main className="flex-1 ml-64 overflow-y-auto overflow-x-hidden overscroll-none">
        {children}
      </main>
    </div>
  );
}
