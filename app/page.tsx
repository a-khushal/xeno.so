"use client";

import Controller from "@/components/controller";
import { useUIStore } from "@/store/store";
import { useEffect } from "react";

import EditableCodeBox from "@/components/code-editor";

export default function Home() {
  const isDark = useUIStore((s) => s.darkMode);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className={`flex flex-col items-center justify-center p-10 rounded-lg shadow-lg ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
         <EditableCodeBox />
      </div>
      <Controller />
    </div>
  );
}