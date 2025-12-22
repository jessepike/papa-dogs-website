import Link from 'next/link';
import type { AnnouncementConfig } from '@/content/types';

interface AnnouncementBannerProps {
  announcement: AnnouncementConfig;
}

export default function AnnouncementBanner({ announcement }: AnnouncementBannerProps) {
  if (!announcement.enabled) {
    return null;
  }

  return (
    <div className="bg-primary text-primary-foreground py-3 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm md:text-base font-semibold">
          {announcement.message}
          {announcement.linkUrl && announcement.linkText && (
            <>
              {' '}
              <Link
                href={announcement.linkUrl}
                className="underline hover:text-white transition-colors"
              >
                {announcement.linkText}
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
