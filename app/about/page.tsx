import Navigation from '@/components/marketing/navigation';
import Footer from '@/components/marketing/footer';
import AnnouncementBanner from '@/components/marketing/announcement-banner';
import { loadSiteContent } from '@/components/content-loader';
import { MapPin, Mountain, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const content = loadSiteContent();

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner announcement={content.announcement} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            About Papa Dogs
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            Weaverville's Favorite Taphouse & Deli
          </p>
          <p className="text-xl text-white/90">
            Serving handcrafted happiness since 2008
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <MapPin className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Weaverville, California</h3>
              <p className="text-foreground/80">
                Nestled in the heart of Trinity County, Weaverville is a charming mountain town
                surrounded by the majestic Trinity Alps and pristine wilderness.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <Mountain className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gateway to Adventure</h3>
              <p className="text-foreground/80">
                Whether you're heading to the Trinity Alps, fishing on the Trinity River,
                or exploring Trinity Lake, Papa Dogs is your perfect stop for great food and cold drinks.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Favorite</h3>
              <p className="text-foreground/80">
                We're proud to be part of this close-knit community. From locals grabbing lunch
                to travelers passing through, everyone is welcome at Papa Dogs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            What Makes Us Special
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 text-left max-w-2xl mx-auto">
            <p>
              At Papa Dogs, we believe in doing things right. Our signature sandwiches are made fresh
              to order with quality ingredients, our tri-tip is slow-smoked to perfection, and our
              homemade soups are crafted in small batches for maximum flavor.
            </p>
            <p>
              With 20 taps featuring local craft beers, ciders, and kombucha, plus the largest beer
              selection in Trinity County, there's always something new to try. And for the whole family,
              we offer fresh-squeezed lemonade, milkshakes, and over 100 drink options.
            </p>
            <p>
              Our outdoor seating area is the perfect spot to relax after a day of adventure,
              enjoy the mountain air, and experience the best of Northern California hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Come Visit Us</h2>
          <p className="text-xl text-foreground/80 mb-8">
            Stop by and taste what makes Papa Dogs a Weaverville favorite!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${content.contact.phone.replace(/[^0-9]/g, '')}`}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md"
            >
              Call {content.contact.phone}
            </a>
            <Link
              href="/contact"
              className="bg-foreground/10 text-foreground px-8 py-4 rounded-lg font-bold hover:bg-foreground/20 transition-all"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
