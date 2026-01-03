'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Users, Target, Eye, Award, Briefcase, CheckCircle } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">One Stop Recruitment</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your trusted partner in connecting top-tier talent with leading businesses through comprehensive recruitment solutions
              </p>
            </div>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Connecting Talent with <span className="text-blue-600">Opportunity</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    At One Stop Recruitment, we specialize in providing businesses with top-tier talent through a comprehensive range of consulting, HR, and manpower solutions. Our mission is to simplify the recruitment process, ensuring that businesses can efficiently access the right candidates while nurturing long-term partnerships.
                  </p>
                  <p>
                    We are dedicated to understanding the unique needs of each client, offering customized strategies that align with their goals and values. By focusing on integrity, innovation, and excellence, we aim to foster a workforce that drives business success and growth.
                  </p>
                  <p>
                    Our team strives to create a seamless experience for both employers and job seekers, ensuring a perfect match that empowers companies to reach their full potential. At One Stop Recruitment, we are passionate about supporting businesses in building high-performing teams that will shape the future of industries across the globe.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/hero.webp"
                  alt="Professional team connecting talent with opportunity"
                  className="w-full h-96 lg:h-[500px] rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  At One Stop Recruitment, our mission is to streamline the recruitment process by connecting businesses with the best talent through our expert consulting, HR, and manpower solutions. We are committed to providing efficient, tailored services that help organizations build empowered workforces while fostering strong, long-lasting relationships with both clients and candidates.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We envision a world where businesses thrive through a skilled and motivated workforce, empowered by seamless recruitment processes. Guided by our core values of integrity, innovation, and excellence, we strive to be a trusted partner for organizations, helping them unlock their full potential and achieve sustainable growth through exceptional talent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-600">Core Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">Building trust through transparent and honest partnerships</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Embracing creative solutions to meet evolving workforce needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Delivering superior quality in every recruitment solution</p>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates We Offer */}
        <section className="py-16 lg:py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Candidates We <span className="text-blue-600">Offer</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Providing skilled professionals across various industries
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Shippers or Receivers</h3>
                <p className="text-gray-600 text-sm">Experienced logistics professionals</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Forklift Operators</h3>
                <p className="text-gray-600 text-sm">Certified and skilled operators</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Machine Operators</h3>
                <p className="text-gray-600 text-sm">Technical and experienced operators</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Skilled & Semi-skilled Workers</h3>
                <p className="text-gray-600 text-sm">Versatile workforce solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your <span className="text-blue-600">Dream Team</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Partner with One Stop Recruitment and experience the difference that expert talent solutions can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/current-openings"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Find Talent
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
