"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/pd-logo-nobg.png"
              alt="Papa Dogs Logo"
              width={120}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/menu" className="text-foreground hover:text-primary font-semibold transition-colors">
              Menu
            </Link>
            <Link href="/catering" className="text-foreground hover:text-primary font-semibold transition-colors">
              Catering
            </Link>
            <Link href="/rewards" className="text-foreground hover:text-primary font-semibold transition-colors">
              Rewards
            </Link>
            <Link href="/?scroll=locations" className="text-foreground hover:text-primary font-semibold transition-colors">
              Hours
            </Link>
            <a href="tel:530-623-3690" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
              ORDER NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-gray-100"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link href="/menu" className="block text-foreground hover:text-primary font-semibold py-2">
              Menu
            </Link>
            <Link href="/catering" className="block text-foreground hover:text-primary font-semibold py-2">
              Catering
            </Link>
            <Link href="/rewards" className="block text-foreground hover:text-primary font-semibold py-2">
              Rewards
            </Link>
            <Link href="/?scroll=locations" className="block text-foreground hover:text-primary font-semibold py-2">
              Hours
            </Link>
            <a href="tel:530-623-3690" className="block w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all text-center">
              ORDER NOW
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
