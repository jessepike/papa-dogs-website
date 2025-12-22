import Navigation from '@/components/marketing/navigation';
import Footer from '@/components/marketing/footer';
import AnnouncementBanner from '@/components/marketing/announcement-banner';
import { loadSiteContent } from '@/components/content-loader';
import { Gift, Star, Users } from 'lucide-react';

export default function RewardsPage() {
  const content = loadSiteContent();

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner announcement={content.announcement} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Rewards Program
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Coming Soon!
          </p>
          <p className="text-xl text-white/90">
            We're working on an exciting new rewards program to thank our loyal customers.
            Stay tuned for updates!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <Gift className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn Points</h3>
              <p className="text-foreground/80">
                Earn points with every purchase and redeem them for free food and drinks.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <Star className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Exclusive Perks</h3>
              <p className="text-foreground/80">
                Get access to exclusive offers, early access to new menu items, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-6">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">VIP Treatment</h3>
              <p className="text-foreground/80">
                Enjoy special birthday rewards and recognition as a valued Papa Dogs customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-foreground/80 mb-8">
            Follow us on social media to be the first to know when our rewards program launches!
          </p>
          <div className="flex justify-center gap-4">
            {content.contact.socialMedia.instagram && (
              <a
                href={content.contact.socialMedia.instagram}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all"
              >
                Follow on Instagram
              </a>
            )}
            {content.contact.socialMedia.facebook && (
              <a
                href={content.contact.socialMedia.facebook}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all"
              >
                Follow on Facebook
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
