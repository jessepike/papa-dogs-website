import Image from 'next/image';
import Link from 'next/link';
import type { FeaturedItem } from '@/content/types';

interface FeaturedItemProps {
  item: FeaturedItem;
  index: number;
}

export default function FeaturedItemCard({ item, index }: FeaturedItemProps) {
  const isReversed = index % 2 === 1;

  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        {item.eyebrow && (
          <p className="text-primary font-bold text-sm uppercase tracking-wide">
            {item.eyebrow}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          {item.title}
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          {item.description}
        </p>
        {item.ctaUrl && (
          <Link
            href={item.ctaUrl}
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            {item.ctaText}
          </Link>
        )}
      </div>
    </div>
  );
}
