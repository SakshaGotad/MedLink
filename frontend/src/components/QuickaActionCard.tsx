import React from "react";
import { ReactNode } from "react";
interface QuickActionCardProps {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
}

export default function QuickaActionCard({
  title,
  icon,
  onClick,
}: QuickActionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-indigo-50 transition p-5 w-full rounded-xl flex flex-col items-center justify-center shadow-sm"
    >
      <div className="text-indigo-600 mb-2">{icon}</div>
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </button>
  );
}
