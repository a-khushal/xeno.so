"use client"

import Controller from "@/components/controller";
import { useUIStore } from "@/store/store";

export default function Home() {
  const isDark = useUIStore((s) => s.darkMode);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className={`flex flex-col items-center justify-center p-56 ${isDark ? "bg-black" : "bg-white"
          }`}
      >
      </div>
      <Controller />
    </div>
  );
}