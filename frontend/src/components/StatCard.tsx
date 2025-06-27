import React from 'react'
import { ReactNode } from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon?: ReactNode;
  }

export default function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <div className='bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-1 min-w-[200px]'>
        <div className="flex items-center justify-between">
        <h4 className="text-gray-700 font-medium">{title}</h4>
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-indigo-600">{value}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}

      
    </div>
  )
}
