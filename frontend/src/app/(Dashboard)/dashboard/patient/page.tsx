'use client';

import {
  CalendarCheck,
  ClipboardList,
  FileText,
  Stethoscope,
  User,
  Plus,
} from 'lucide-react';
import StatCard from '@/components/StatCard';
import QuickActionCard from '@/components/QuickaActionCard';

export default function page() {


  const statCards = [
    {
      title: 'Total Appointments',
      value: 8,
      subtitle: '3 upcoming',
      icon: <CalendarCheck size={20} />,
    },
    {
      title: 'Medical Reports',
      value: 0,
      subtitle: 'Uploaded documents',
      icon: <FileText size={20} />,
    },
    {
      title: 'Available Doctors',
      value: 3,
      subtitle: 'Ready to help you',
      icon: <Stethoscope size={20} />,
    },
  ];

  const quickActions = [
    { title: 'Book Appointment', icon: <Plus /> },
    { title: 'Upload Report', icon: <FileText /> },
    { title: 'My Appointments', icon: <ClipboardList /> },
    { title: 'My Profile', icon: <User /> },
  ];

  const upcomingAppointments = [
    {
      doctor: 'Dr. Sarah Wilson',
      date: '2024-06-05',
      time: '09:00',
      status: 'pending',
    },
    {
      doctor: 'Dr. Sarah Wilson',
      date: '2024-06-06',
      time: '09:00',
      status: 'pending',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-indigo-600 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-400 text-white p-6 rounded-2xl h-[200px]">
        <h1 className="text-4xl font-bold mb-1">Welcome back, John Patient!</h1>
        <p className="text-">Manage your health appointments and medical records</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, index) => (
          <StatCard key={index} {...card} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <QuickActionCard key={index} {...action} />
          ))}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Upcoming Appointments</h3>
        <div className="space-y-3">
          {upcomingAppointments.map((appt, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center"
            >
              <div>
                <h4 className="font-medium text-gray-800">{appt.doctor}</h4>
                <p className="text-sm text-gray-500">
                  {appt.date} at {appt.time}
                </p>
              </div>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                {appt.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
