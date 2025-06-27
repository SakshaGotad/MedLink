'use client';

import * as Popover from '@radix-ui/react-popover';
import { Calendar } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { CalendarDays } from 'lucide-react';

export default function DatePicker({ selected, onSelect }: {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="w-full border px-3 py-2 rounded-lg flex items-center justify-between text-left"
        >
          <span>{selected ? selected.toLocaleDateString() : 'Select date'}</span>
          <CalendarDays size={16} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="bg-white rounded-lg shadow-lg p-4 z-50" sideOffset={5}>
          <Calendar
            mode="single"
            selected={selected}
            onSelect={onSelect}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
