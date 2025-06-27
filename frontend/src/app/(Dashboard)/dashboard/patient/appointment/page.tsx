'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog } from '@headlessui/react';
// import { CalendarDays, Clock, User } from 'lucide-react';
import DatePicker from '@/components/DatePicker';
import { User } from 'lucide-react';
import DateTimePicker from '@/components/DateTimePicker';

const doctors = [
  { id: '1', name: 'Dr. Aditi Rao', fee: 900 },
  { id: '2', name: 'Dr. Rohan Mehta', fee: 1200 },
];

export default function AppointmentPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
    
  const router = useRouter();

  const handleDone = () => {
    // Normally you'd call API here to create appointment
    setIsOpen(false);
    router.push('/dashboard/patient'); // redirect after "done"
  };

  const fee = doctors.find((doc) => doc.id === selectedDoctor)?.fee || 0;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Create Appointment</h1>

      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        + Create Appointment
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl max-w-md w-full p-6 space-y-4 shadow-xl">
            <Dialog.Title className="text-xl font-semibold text-gray-800">New Appointment</Dialog.Title>

            {/* Doctor Selection */}
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1 mb-1">
                <User size={16} /> Doctor
              </label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg"
              >
                <option value="">Select a doctor</option>
                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <DateTimePicker
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
  selectedTime={selectedTime}
  onTimeSelect={setSelectedTime}
/>
            {/* Fee */}
            <div className="text-right font-medium text-indigo-600">
              Fee: ₹{fee}
            </div>

            {/* Done */}
            <div className="flex justify-end">
              <button
                onClick={handleDone}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Done
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
