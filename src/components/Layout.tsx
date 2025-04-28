import React from "react";
import ThemeToggle from "./ThemeToggle";
import TerminalButton from "./ui/TerminalButton";

interface LayoutProps {
  children: React.ReactNode;
}

// #171D1C
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#161925]  text-black dark:text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
          <TerminalButton />
        </div>
        {children}
      </div>
    </div>
  );
}
