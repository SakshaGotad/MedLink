'use client';
import { useRouter } from 'next/navigation';
import DoctorCard from '@/components/DoctorCard';

const doctors = [
  {
    id: '1',
    name: 'Dr. Aditi Rao',
    specialization: 'Dermatologist',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    fee: 900,
  },
  {
    id: '2',
    name: 'Dr. Rohan Mehta',
    specialization: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    fee: 1200,
  },
];

export default function AppointmentPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Choose a Doctor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} onClick={() => router.push(`/dashboard/patient/doctors/${doctor.id}`)}>
            <DoctorCard doctor={doctor} onClick={function (): void {
                    throw new Error('Function not implemented.');
                } } />
          </div>
        ))}
      </div>
    </div>
  );
}
