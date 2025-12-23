import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="text-white relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/rusnjgoehg0ruc1qbyiou6f4/cnre0n2nmcah5slf7opb7hx2/J08ZC4o4MHGxHjxkFLgT_.jpg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="col-span-1">
            <Image
              src="/images/logo/pd-logo-nobg.png"
              alt="Papa Dogs Logo"
              width={200}
              height={100}
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-black">
              Handcrafted happiness in every bite. Serving fresh, quality food since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="hover:text-primary transition-colors text-white">Menu</Link></li>
              <li><Link href="/menu" className="hover:text-primary transition-colors text-white">Beers</Link></li>
              <li><Link href="/catering" className="hover:text-primary transition-colors text-white">Catering</Link></li>
              <li><Link href="/rewards" className="hover:text-primary transition-colors text-white">Rewards</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors text-white">Contact</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors text-white">Community</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/_papadogs_/?hl=en" className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/cornermart/" className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary hover:bg-primary/90 p-3 rounded-full transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white md:mb-0 mb-4">
            Copyright © 2025 Papa Dogs Taphouse & Deli. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#terms" className="hover:text-primary transition-colors text-white">Terms & Conditions</Link>
            <Link href="#privacy" className="hover:text-primary transition-colors text-white">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
