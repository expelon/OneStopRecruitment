'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

export default function Testimonials() {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
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
  );
}
