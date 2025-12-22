import { readFileSync } from 'fs';
import { join } from 'path';
import type { SiteContent } from '@/content/types';
import { isSiteContent } from '@/content/types';

/**
 * Loads and validates the site content from content/site-content.json
 * This runs at build time in Next.js static generation
 */
export function loadSiteContent(): SiteContent {
  const contentPath = join(process.cwd(), 'content', 'site-content.json');

  try {
    const fileContent = readFileSync(contentPath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Validate content structure using type guard
    if (!isSiteContent(data)) {
      throw new Error('Invalid site content structure');
    }

    // Business logic validations
    const errors: string[] = [];

    // Check unique displayOrder in carousel
    const carouselOrders = data.carousel.images.map((img) => img.displayOrder);
    if (new Set(carouselOrders).size !== carouselOrders.length) {
      errors.push('Carousel images must have unique displayOrder values');
    }

    // Check unique displayOrder in featuredItems
    const featuredOrders = data.featuredItems.map((item) => item.displayOrder);
    if (new Set(featuredOrders).size !== featuredOrders.length) {
      errors.push('Featured items must have unique displayOrder values');
    }

    // Validate image paths start with /images/
    const allImagePaths = [
      ...data.carousel.images.map((img) => img.src),
      ...data.featuredItems.map((item) => item.imageSrc),
    ];

    for (const path of allImagePaths) {
      if (!path.startsWith('/images/')) {
        errors.push(`Image path must start with /images/: ${path}`);
      }
    }

    if (errors.length > 0) {
      throw new Error(`Content validation failed:\n${errors.join('\n')}`);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to load site content: ${error.message}`);
    }
    throw new Error('Failed to load site content: Unknown error');
  }
}
