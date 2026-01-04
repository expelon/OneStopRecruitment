'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Briefcase } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Job Seekers', href: '/job-seekers' },
    { name: 'Employers', href: '/employers' },
    { name: 'Cleaners & Renovators', href: '/cleaners-renovators' },
    { name: 'Current Openings', href: '/current-openings' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              OneStop<span className="text-yellow-500">Recruitment</span>
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>

          <div className="hidden md:flex items-center justify-center space-x-0 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.href 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact-us"
            className="hidden md:flex px-4 lg:px-6 py-3 bg-blue-500 text-white text-sm lg:text-base font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    pathname === link.href 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className={`mx-4 mt-2 px-4 py-4 bg-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 text-center shadow-sm ${
                  pathname === '/contact-us' 
                    ? 'bg-blue-600' 
                    : ''
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
