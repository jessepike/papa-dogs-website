import Navigation from '@/components/marketing/navigation';
import Footer from '@/components/marketing/footer';
import AnnouncementBanner from '@/components/marketing/announcement-banner';
import { loadSiteContent } from '@/components/content-loader';
import Image from 'next/image';

export default function MenuPage() {
  const content = loadSiteContent();

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner announcement={content.announcement} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              Our Menu
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              Fresh, handcrafted food made daily
            </p>
          </div>

          {/* Menu Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/menu/menu-1.png"
                alt="Papa Dogs Menu Page 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/menu/menu-2.png"
                alt="Papa Dogs Menu Page 2"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-2xl font-bold mb-6">Ready to Order?</p>
            <a
              href={`tel:${content.contact.phone.replace(/[^0-9]/g, '')}`}
              className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-lg text-xl font-bold hover:bg-primary/90 transition-all shadow-lg"
            >
              Call {content.contact.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
