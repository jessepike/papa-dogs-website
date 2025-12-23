import Navigation from '@/components/marketing/navigation';
import Footer from '@/components/marketing/footer';
import AnnouncementBanner from '@/components/marketing/announcement-banner';
import { loadSiteContent } from '@/components/content-loader';
import { Users, Instagram, Facebook } from 'lucide-react';

export default function CommunityPage() {
  const content = loadSiteContent();

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner announcement={content.announcement} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Community
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Coming Soon!
          </p>
          <p className="text-xl text-white/90">
            We're building something special for our community.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-primary/10 p-8 rounded-full mb-8">
            <Users className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Stay Tuned</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Papa Dogs has always been about more than just great food—it's about bringing people together.
            We're working on new ways to connect with our community and give back to the place we call home.
          </p>
          <p className="text-lg text-foreground/60">
            Check back soon for updates on community events, partnerships, and more!
          </p>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-foreground/80 mb-8">
            Follow us on social media to be the first to know about community updates!
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

      <Footer />
    </div>
  );
}
