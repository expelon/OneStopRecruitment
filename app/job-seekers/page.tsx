'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import Link from 'next/link';

export default function JobSeekersPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'EVVIK',
      position: 'Job Seeker',
      company: '',
      content: 'One Stop Recruitment made my job search effortless. The team understood my need perfectly',
      rating: 5,
    },
    {
      id: 2,
      name: 'VIYAN',
      position: 'Job Seeker',
      company: '',
      content: 'Their personalized service truly sets them apart I found my dream job in no time!',
      rating: 5,
    },
    {
      id: 3,
      name: 'JACKLIN JOSE',
      position: 'Job Seeker',
      company: '',
      content: 'Professional and efficient! One Stop Recruitment exceeded my expectations!',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="relative bg-white pt-16 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              {/* Left Section */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Take the First Step <br />Towards Your New <span className="text-amber-500">Career</span>
                </h1>
                <p className="text-base text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
                  Explore exciting job opportunities, apply in just a few clicks, and take your career to the next level. Your future is waiting
                </p>
                <Link href="/current-openings" className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg">
                  Find a Job
                </Link>
              </div>

              {/* Right Section - Hero2 Image */}
              <div className="mt-12 lg:mt-0 relative">
                <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
                  <img
                    src="/hero2.webp"
                    alt="Career opportunities"
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Search Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Find Your <span className="text-blue-600">Dream Job</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Search from our extensive database of job openings across various industries and locations
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Search Form */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="Search job title..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Search location..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Categories</option>
                    <option>General Labour</option>
                    <option>Machine Handlers</option>
                    <option>Packers</option>
                    <option>Warehouse Workers</option>
                    <option>Machine Operator</option>
                    <option>Bakery Workers</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <Link href="/current-openings" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Search Jobs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Your Trusted <span className="text-blue-600">Staffing Partner</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                Providing Reliable Staffing Solutions for Every Industry
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 relative">
              <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-200" />

              <div className="text-center mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 bg-blue-100 flex items-center justify-center">
                  <User className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
                </div>
                <div className="flex justify-center mb-3">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed text-center italic">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="text-center">
                <div className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</div>
                <div className="text-gray-600">
                  {currentTestimonial.company ? `${currentTestimonial.position} at ${currentTestimonial.company}` : currentTestimonial.position}
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full transition-all duration-200 ${
                        index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Start Career Journey Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your <span className="text-blue-600">Career Journey</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their dream jobs through OneStopRecruitment.
            </p>
            <Link href="/current-openings" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started Today
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
