import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side with image and yellow shape */}
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 bg-yellow-400 rounded-r-full transform scale-150 origin-left"></div>
              <img
                src="/f2.webp"
                alt="Professional person"
                className="relative z-10 w-full h-full object-cover"
              />
            </div>
            
            {/* Right side with content */}
            <div className="relative p-8 sm:p-12 lg:p-16 flex items-center">
              {/* Decorative yellow shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300 rounded-full transform translate-x-12 translate-y-12 opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-blue-600 font-semibold text-lg mb-2">Get Started</h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Ready to get started with OneStop Recruitment?
                </h2>
                <button className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
