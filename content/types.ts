/**
 * Papa Dogs Website Content Schema
 *
 * This file defines the TypeScript interfaces for all website content.
 * Content is stored in site-content.json and loaded at build time.
 *
 * Validation Rules:
 * - displayOrder must be unique within arrays
 * - imageSrc paths must start with /images/
 * - Phone numbers must match format: 530-XXX-XXXX
 * - All required fields must be present (no nulls)
 */

/**
 * Announcement Banner Configuration
 * Displayed at the top of the homepage when enabled
 */
export interface AnnouncementConfig {
  enabled: boolean;
  message: string;
  linkUrl?: string | null;
  linkText?: string | null;
}

/**
 * Hero Section Configuration
 * Main headline and call-to-action on homepage
 */
export interface HeroConfig {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaPhone: string; // Format: 530-XXX-XXXX
}

/**
 * Carousel Image
 * Images displayed in the hero carousel
 * IMPORTANT: displayOrder must be unique
 */
export interface CarouselImage {
  src: string;          // Must start with /images/
  alt: string;          // Accessibility description
  displayOrder: number; // Must be unique, determines display order
}

/**
 * Carousel Configuration
 */
export interface CarouselConfig {
  images: CarouselImage[];
}

/**
 * Featured Item
 * Main content sections on homepage (soup special, sandwiches, beers, etc.)
 * IMPORTANT: displayOrder must be unique, id must be unique
 */
export interface FeaturedItem {
  id: string;           // Unique identifier (e.g., "trinami", "soup", "beers")
  displayOrder: number; // Must be unique, determines layout position
  eyebrow: string;      // Small label above title (e.g., "Local Favorite")
  title: string;
  description: string;
  imageSrc: string;     // Must start with /images/
  imageAlt: string;     // Accessibility description
  ctaText: string;      // Call-to-action button text
  ctaUrl?: string;      // Optional link (e.g., tel:530-623-3690)
}

/**
 * Hours Schedule Entry
 * Single entry in the hours schedule
 */
export interface HoursEntry {
  days: string;         // e.g., "Mon-Fri", "Saturday", "Sunday"
  hours: string;        // e.g., "9am - 5pm", "Closed"
}

/**
 * Hours Configuration
 * Business hours with seasonal schedules
 */
export interface HoursConfig {
  season: string;       // e.g., "Winter", "Summer"
  schedule: HoursEntry[];
}

/**
 * Contact Address
 */
export interface ContactAddress {
  street: string;
  city: string;
  state: string;        // 2-letter code (e.g., "CA")
  zip: string;          // 5-digit code
}

/**
 * Social Media Links
 */
export interface SocialMediaLinks {
  instagram?: string;   // Full URL
  facebook?: string;    // Full URL
  youtube?: string;     // Full URL
}

/**
 * Contact Information
 */
export interface ContactInfo {
  phone: string;                // Format: 530-XXX-XXXX
  address: ContactAddress;
  socialMedia: SocialMediaLinks;
}

/**
 * SEO Metadata
 * Used for meta tags and search engine optimization
 */
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
}

/**
 * Complete Site Content
 * Root interface for site-content.json
 */
export interface SiteContent {
  version: string;              // Schema version (e.g., "1.0.0")
  lastUpdated: string;          // ISO 8601 timestamp

  announcement: AnnouncementConfig;
  hero: HeroConfig;
  carousel: CarouselConfig;
  featuredItems: FeaturedItem[];
  hours: HoursConfig;
  contact: ContactInfo;
  seo: SEOConfig;
}

/**
 * Type guard to check if content has the expected shape
 */
export function isSiteContent(content: any): content is SiteContent {
  return (
    typeof content === 'object' &&
    content !== null &&
    typeof content.version === 'string' &&
    typeof content.lastUpdated === 'string' &&
    typeof content.announcement === 'object' &&
    typeof content.hero === 'object' &&
    typeof content.carousel === 'object' &&
    Array.isArray(content.featuredItems) &&
    typeof content.hours === 'object' &&
    typeof content.contact === 'object' &&
    typeof content.seo === 'object'
  );
}
