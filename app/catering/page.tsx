import Navigation from '@/components/marketing/navigation';
import Footer from '@/components/marketing/footer';
import AnnouncementBanner from '@/components/marketing/announcement-banner';
import { loadSiteContent } from '@/components/content-loader';
import { Utensils, Phone } from 'lucide-react';

export default function CateringPage() {
  const content = loadSiteContent();

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner announcement={content.announcement} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Catering
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Coming Soon!
          </p>
          <p className="text-xl text-white/90">
            Bringing Papa Dogs to your next event.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-primary/10 p-8 rounded-full mb-8">
            <Utensils className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Catering Services</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            We're putting together catering options to bring our handcrafted sandwiches,
            slow-smoked tri-tip, and delicious sides to your next event. Whether it's a
            corporate lunch, family gathering, or special celebration, we've got you covered.
          </p>
          <p className="text-lg text-foreground/60">
            Full catering menu coming soon!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
            <Phone className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-foreground/80 mb-8">
            Interested in catering for your event? Give us a call to discuss your needs!
          </p>
          <a
            href={`tel:${content.contact.phone.replace(/[^0-9]/g, '')}`}
            className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-lg text-xl font-bold hover:bg-primary/90 transition-all shadow-lg"
          >
            Call {content.contact.phone}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
