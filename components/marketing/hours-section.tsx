import { Clock } from 'lucide-react';
import type { HoursConfig } from '@/content/types';

interface HoursSectionProps {
  hours: HoursConfig;
}

export default function HoursSection({ hours }: HoursSectionProps) {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Hours & Location
          </h2>
          <p className="text-lg text-foreground/80">
            {hours.season} Hours
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Business Hours</h3>
            </div>

            <div className="space-y-4">
              {hours.schedule.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0"
                >
                  <span className="font-semibold text-lg">{schedule.days}</span>
                  <span className="text-lg text-foreground/80">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
