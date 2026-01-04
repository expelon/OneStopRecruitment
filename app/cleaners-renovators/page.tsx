'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Check, Star, Settings } from 'lucide-react';

export default function CleanersRenovatorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-white pt-16 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              {/* Left Section - Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Professional Cleaners & <span className="text-amber-500">Renovation Workers</span>
                </h1>
                <p className="text-base text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
                  We provide reliable, skilled, and fully vetted professional cleaners and renovation workers for residential and commercial projects. Whether you need a spotless space or expert hands for repairs and upgrades, our team delivers quality results you can trust.
                </p>
                <Link href="/contact-us" className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg">
                  Get Started Today
                </Link>
              </div>

              {/* Right Section - Cleaner Image */}
              <div className="mt-12 lg:mt-0 relative">
                <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
                  <img
                    src="/cleaning.webp"
                    alt="Professional cleaning service"
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Cleaning Services Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Professional <span className="text-blue-600">Cleaning Services</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our experienced cleaners ensure your space is clean, safe, and welcoming.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Services We Offer
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Residential cleaning (homes, apartments)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Office and commercial cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Deep cleaning & move-in/move-out cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Post-construction cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Regular scheduled cleaning or one-time services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Why Choose Our Cleaners?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Trained and background-checked staff</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">High-quality equipment and supplies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Attention to detail and hygiene standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Flexible scheduling to fit your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Renovation & Repair Workers Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-4"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Renovation & <span className="text-yellow-500">Repair Workers</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our skilled renovation workers handle projects of all sizes, from small repairs to full upgrades.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Services Include
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Interior and exterior renovations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Painting and wall finishing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Flooring installation and repairs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Tiling, plastering, and drywall work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Minor plumbing and electrical support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">General maintenance and repairs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Why Choose Our Renovation Team?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-orange-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Experienced, professional workmanship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-orange-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">On-time project completion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-orange-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Safe and efficient work practices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-orange-50 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Clear communication from start to finish</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <span className="text-blue-700 font-semibold text-sm">OUR PROMISE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Trusted, <span className="text-blue-600">Reliable</span> & <span className="text-amber-600">Professional</span>
              </h2>
              <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Every member of our team represents our commitment to excellence. We hand-pick professionals who not only possess exceptional skills but also embody the values of trust, reliability, and professionalism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-none"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 h-full border border-white/20 group-hover:translate-y-[-8px] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-500">Carefully Selected</h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                      Rigorous screening process with comprehensive background checks, skill verification, and personality assessments to ensure only the best professionals join our team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-none"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 h-full border border-white/20 group-hover:translate-y-[-8px] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-500">Experienced</h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                      Seasoned professionals with years of industry experience, proven track records, and specialized expertise in their respective fields.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-none"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 h-full border border-white/20 group-hover:translate-y-[-8px] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-500">Quality Committed</h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                      Unwavering dedication to excellence with meticulous attention to detail, industry best practices, and continuous improvement mindset.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-none"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 h-full border border-white/20 group-hover:translate-y-[-8px] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-500">Customer Focused</h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                      Your satisfaction is our priority. We build lasting relationships through exceptional service, clear communication, and personalized attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-blue-600 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white font-semibold text-sm">READY TO GET STARTED?</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Get Started <span className="text-amber-300">Today</span>
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
                  Looking for dependable cleaners or renovation workers? <br />
                  Contact us today to discuss your needs and receive a customized service plan tailored to your requirements.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact-us" className="group relative inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-amber-50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us Now</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <div className="flex items-center text-white/80">
                  <svg className="w-5 h-5 mr-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">Call us: 647-703-3349</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
