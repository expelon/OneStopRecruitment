'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect, useRef } from 'react';
import { Users, Target, Eye, Award, Briefcase, CheckCircle, Clock, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react';

export default function EmployersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTime: number | null = null;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return count;
  };

  const companiesCount = useCounter(100);
  const yearsCount = useCounter(10);
  const satisfactionCount = useCounter(100);
  const placementsCount = useCounter(1000);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-white pt-16 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              {/* Left Section */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Partner with <span className="text-blue-600">One Stop Recruitment</span>
                </h1>
                <p className="text-base text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
                  Build your dream team with our comprehensive staffing solutions. We connect you with top-tier talent that drives business success and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#start-hiring"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg"
                  >
                    Start Hiring
                  </a>
                </div>
              </div>

              {/* Right Section - Hero Image */}
              <div className="mt-12 lg:mt-0 relative">
                <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
                  <img
                    src="/employer.webp"
                    alt="Professional recruitment team with employers"
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why <span className="text-blue-600">Choose Us</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional recruitment solutions that transform businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Targeted Talent Matching</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Our advanced screening process ensures you get candidates who perfectly match your requirements and company culture.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Quick Turnaround</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Fill positions faster with our streamlined recruitment process and extensive candidate database.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Quality Assurance</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Every candidate undergoes thorough verification and assessment to ensure quality and reliability.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Industry Expertise</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Deep understanding of various industries enables us to find the right talent for your specific needs.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Dedicated Support</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Our team provides personalized support throughout the entire recruitment process.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Proven Track Record</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Successfully placed thousands of candidates across various industries with high retention rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section ref={sectionRef} className="bg-yellow-500 py-12 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold">{companiesCount}+</p>
                <p className="text-sm md:text-base opacity-90">Companies served</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold">{yearsCount}+</p>
                <p className="text-sm md:text-base opacity-90">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold">{satisfactionCount}%</p>
                <p className="text-sm md:text-base opacity-90">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold">{placementsCount}+</p>
                <p className="text-sm md:text-base opacity-90">Successful Placements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Building Stronger, More Efficient Teams by Serving a Wide Range of Industries
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'General Labour',
                  image: '/general.webp',
                },
                {
                  name: 'Machine Handlers',
                  image: '/machine handler.jpg',
                },
                {
                  name: 'Warehouse Workers',
                  image: '/warehouse.webp',
                },
                {
                  name: 'Packers',
                  image: '/packers.webp',
                },
                {
                  name: 'Machine Operator',
                  image: '/machine operator.webp',
                },
                {
                  name: 'Bakery Workers',
                  image: '/backery.webp',
                },
              ].map((industry) => (
                <div
                  key={industry.name}
                  className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                >
                  <div className="h-64">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-white text-2xl font-semibold">
                        {industry.name}
                      </h3>
                      <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a href="/industries" className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl">
                View More
              </a>
            </div>
          </div>
        </section>

        {/* Employer Registration Form */}
        <section id="start-hiring" className="py-16 lg:py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Start <span className="text-blue-600">Hiring Today</span>
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will get in touch with you within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <form 
                    action="https://formsubmit.co/farook@theonestoprecruitment.com" 
                    method="POST"
                    className="space-y-6"
                  >
                    <input type="hidden" name="_subject" value="New Employer Request from OneStop Recruitment" />
                    <input type="hidden" name="_template" value="table" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+1 (416) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="general-labour">General Labour</option>
                    <option value="machine-operators">Machine Operators</option>
                    <option value="warehouse-workers">Warehouse Workers</option>
                    <option value="packers">Packers</option>
                    <option value="machine-handlers">Machine Handlers</option>
                    <option value="bakery-workers">Bakery Workers</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Tell us about your hiring needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CallToAction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side with image and yellow shape */}
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-yellow-400 rounded-r-full transform scale-150 origin-left"></div>
                  <img
                    src="/f2.webp"
                    alt="Professional recruitment team"
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
                      Ready to build your dream team?
                    </h2>
                    <a
                      href="#start-hiring"
                      className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Start Hiring
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
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
