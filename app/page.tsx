import Navigation from '@/components/marketing/navigation';
import Footer from '@/components/marketing/footer';
import HeroCarousel from '@/components/marketing/hero-carousel';
import AnnouncementBanner from '@/components/marketing/announcement-banner';
import FeaturedItemCard from '@/components/marketing/featured-item';
import HoursSection from '@/components/marketing/hours-section';
import ScrollHandler from '@/components/scroll-handler';
import { loadSiteContent } from '@/components/content-loader';

export default function Home() {
  // Load content at build time (static generation)
  const content = loadSiteContent();

  // Sort featured items by displayOrder
  const sortedFeaturedItems = [...content.featuredItems].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Restaurant',
        '@id': 'https://papadogs.com/#restaurant',
        name: 'Papa Dogs Taphouse & Deli',
        image: content.carousel.images[0]?.src || '/images/carousel/trinami-1-zoom.png',
        description: content.seo.description,
        servesCuisine: 'American, Deli, Sandwiches, BBQ',
        priceRange: '$$',
        telephone: content.contact.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: content.contact.address.street,
          addressLocality: content.contact.address.city,
          addressRegion: content.contact.address.state,
          postalCode: content.contact.address.zip,
          addressCountry: 'US',
        },
        openingHoursSpecification: content.hours.schedule.map((schedule) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: schedule.days,
          hours: schedule.hours,
        })),
        acceptsReservations: 'False',
        hasMenu: 'https://papadogs.com/menu',
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://papadogs.com/#localbusiness',
        name: 'Papa Dogs Taphouse & Deli',
        url: 'https://papadogs.com',
        logo: '/images/logo/pd-logo-nobg.png',
        sameAs: [
          content.contact.socialMedia.instagram || '',
          content.contact.socialMedia.facebook || '',
        ].filter(Boolean),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ScrollHandler />
      <AnnouncementBanner announcement={content.announcement} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <HeroCarousel images={content.carousel.images} />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              {content.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 tracking-wide">
              {content.hero.subtitle}
            </p>
            <a
              href={`tel:${content.hero.ctaPhone.replace(/[^0-9]/g, '')}`}
              className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg text-xl font-bold transition-all shadow-2xl hover:shadow-primary/50 hover:scale-105"
            >
              {content.hero.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {sortedFeaturedItems.map((item, index) => (
            <FeaturedItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Hours & Location */}
      <HoursSection hours={content.hours} />

      <Footer />
    </div>
  );
}
