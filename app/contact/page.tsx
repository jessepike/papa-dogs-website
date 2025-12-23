import Navigation from '@/components/marketing/navigation';
import Footer from '@/components/marketing/footer';
import AnnouncementBanner from '@/components/marketing/announcement-banner';
import { loadSiteContent } from '@/components/content-loader';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function ContactPage() {
  const content = loadSiteContent();

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner announcement={content.announcement} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-2xl md:text-3xl">
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Phone */}
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <Phone className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <a
                href={`tel:${content.contact.phone.replace(/[^0-9]/g, '')}`}
                className="text-xl text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                {content.contact.phone}
              </a>
              <p className="text-foreground/60 mt-2">Call ahead to order!</p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <MapPin className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <address className="text-lg not-italic text-foreground/80">
                {content.contact.address.street}<br />
                {content.contact.address.city}, {content.contact.address.state} {content.contact.address.zip}
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${content.contact.address.street}, ${content.contact.address.city}, ${content.contact.address.state} ${content.contact.address.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                Get Directions
              </a>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <Clock className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{content.hours.season} Hours</h3>
              <div className="space-y-2 text-foreground/80">
                {content.hours.schedule.map((item, index) => (
                  <p key={index}>
                    <span className="font-semibold">{item.days}:</span> {item.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Follow Us</h2>
          <p className="text-xl text-foreground/80 mb-8">
            Stay connected for updates, specials, and more!
          </p>
          <div className="flex justify-center gap-6">
            {content.contact.socialMedia.instagram && (
              <a
                href={content.contact.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
            )}
            {content.contact.socialMedia.facebook && (
              <a
                href={content.contact.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all"
              >
                <Facebook className="w-6 h-6" />
                Facebook
              </a>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl text-foreground/80 mb-8">
            Give us a call to place your order for pickup!
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
