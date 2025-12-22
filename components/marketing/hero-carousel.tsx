'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import type { CarouselImage } from '@/content/types';

interface HeroCarouselProps {
  images: CarouselImage[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  // Sort images by displayOrder
  const sortedImages = [...images].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
        }),
      ]}
      className="absolute inset-0 w-full h-full"
    >
      <CarouselContent className="h-full -ml-0">
        {sortedImages.map((image, index) => (
          <CarouselItem key={image.displayOrder} className="h-full pl-0">
            <div className="relative w-full h-[600px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover brightness-75"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
