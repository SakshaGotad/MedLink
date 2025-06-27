'use client';
import React from 'react';
import { CalendarCheck } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  fee: number;
}

export default function DoctorCard({
  doctor,
  onClick,
}: {
  doctor: Doctor;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all hover:border-indigo-300 cursor-pointer"
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-16 h-16 rounded-xl object-cover border border-gray-200"
      />

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
        <p className="text-sm text-gray-500">{doctor.specialization}</p>
        <div className="flex items-center text-indigo-600 font-medium text-sm mt-1">
          ₹{doctor.fee}
          <CalendarCheck size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
}
