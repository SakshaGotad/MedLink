'use client';

import * as Popover from '@radix-ui/react-popover';
import { DayPicker } from 'react-day-picker';
import { CalendarDays, Clock } from 'lucide-react';
import 'react-day-picker/dist/style.css';

type Props = {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  selectedTime: string;
  onTimeSelect: (time: string) => void;
};

const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
];

export default function DateTimePicker({
  selectedDate,
  onDateSelect,
  selectedTime,
  onTimeSelect,
}: Props) {
  return (
    <div className="space-y-4">
      {/* Date Picker */}
      <div>
        <label className="text-sm font-medium text-gray-700 flex items-center gap-1 mb-1">
          <CalendarDays size={16} /> Date
        </label>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="w-full border px-3 py-2 rounded-lg flex items-center justify-between text-left">
              <span>
                {selectedDate
                  ? selectedDate.toLocaleDateString()
                  : 'Select date'}
              </span>
              <CalendarDays size={16} />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="bg-white rounded-lg shadow-lg p-4 z-50"
              sideOffset={5}
            >
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={onDateSelect}
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>

      {/* Time Picker */}
      <div>
        <label className="text-sm font-medium text-gray-700 flex items-center gap-1 mb-1">
          <Clock size={16} /> Time
        </label>
        <select
          value={selectedTime}
          onChange={(e) => onTimeSelect(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        >
          <option value="">Select a time</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
