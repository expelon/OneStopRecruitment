'use client';

import Link from 'next/link';
import { ArrowRight, Users, Building2, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 md:pt-16 pb-8 md:pb-12 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 mt-4 sm:mt-0 leading-tight lg:leading-[3.5rem]">
              <span className="text-yellow-500">Connecting</span> Top Talent
              <span className="block">with Leading Employers</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your hiring partner, every step of the way. Connecting you with top
              candidates, fast and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#jobs"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Find a Job
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-400 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 border-2 border-orange-400 hover:border-orange-500"
              >
                Hire Talent
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Main person image */}
              <div className="relative z-10">
                <img
                  src="/hero.webp"
                  alt="Professional person"
                  className="w-[500px] h-[500px] rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
