/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CalendarCheck,
  FileText,
  LayoutDashboard,
  ClipboardList,
  Stethoscope,
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'Dashboard', href: '/patient', icon: LayoutDashboard },
  { label: 'Book Appointment', href: '/patient/book', icon: CalendarCheck },
  { label: 'History', href: '/patient/history', icon: ClipboardList },
  { label: 'Reports', href: '/patient/reports', icon: FileText },
  { label: 'Doctors', href: '/patient/doctors', icon: Stethoscope },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-80 bg-white shadow-lg p-6 min-h-screen">
      {/* Logo */}
      <div className="text-indigo-600 text-3xl font-bold mb-8 text-center">
        Med<span className="text-purple-500">Link</span>
      </div>

      {/* Nav Items */}
      <nav className="space-y-8">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
          href={href}
          className={clsx(
            'flex items-center gap-3 px-4 py-2 rounded-lg text-2xl font-medium transition-all duration-200',
            pathname === '/patient'
              ? 'bg-indigo-500 text-white'
              : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-600'
          )}
        >
          <Icon size={18} /> {label}
        </Link>
        
        ))}
      </nav>
    </aside>
  );
}
