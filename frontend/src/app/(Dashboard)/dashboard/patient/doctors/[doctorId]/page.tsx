'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const doctorData = {
  1: {
    id: '1',
    name: 'Dr. Aditi Rao',
    specialization: 'Dermatologist',
    fee: 900,
  },
  2: {
    id: '2',
    name: 'Dr. Rohan Mehta',
    specialization: 'Neurologist',
    fee: 1200,
  },
};

export default function AppointmentFormPage() {
  const { doctorId } = useParams();
  const doctor = doctorData[doctorId as keyof typeof doctorData];

  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!doctor) return <div className="text-red-500">Doctor not found</div>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        Book Appointment with {doctor.name}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select
          className="p-2 border rounded-lg"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="consultation">Consultation</option>
          <option value="followup">Follow-up</option>
        </select>

        <input
          type="date"
          className="p-2 border rounded-lg"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="p-2 border rounded-lg"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <p className="text-gray-600 font-medium">Fee: ₹{doctor.fee}</p>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">
        Confirm Appointment
      </button>
    </div>
  );
}
