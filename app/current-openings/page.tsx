'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';
import { useState } from 'react';
import JobCard from '../../components/JobCard';
import { Search, Filter } from 'lucide-react';

export default function CurrentOpeningsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'General Labour Worker - Toronto Manufacturing Co.',
      description: 'Looking for reliable general labour workers for warehouse operations. Must be able to lift heavy objects and work in a fast-paced environment. Full-time position with competitive salary $18-22/hour.',
    },
    {
      id: 2,
      title: 'Machine Operator - Industrial Solutions Ltd.',
      description: 'Seeking experienced machine operators for production line. Previous experience with industrial machinery required. Full-time position in Brampton with salary $20-25/hour.',
    },
    {
      id: 3,
      title: 'Warehouse Associate - Logistics Plus',
      description: 'Warehouse associates needed for picking, packing, and shipping operations. Forklift certification is an asset. Located in Mississauga with salary $17-20/hour.',
    },
    {
      id: 4,
      title: 'Packer - Food Distribution Center',
      description: 'Packers needed for food packaging operations. Must follow safety guidelines and maintain cleanliness. Part-time position in Scarborough with salary $16-18/hour.',
    },
    {
      id: 5,
      title: 'Machine Handler - Production Facility Inc.',
      description: 'Machine handlers required for operating and maintaining industrial equipment. Training provided. Full-time position in Etobicoke with salary $19-23/hour.',
    },
    {
      id: 6,
      title: 'Bakery Worker - Fresh Breads Bakery',
      description: 'Bakery workers needed for bread production and packaging. Early morning shifts available. Full-time position in North York with salary $15-17/hour.',
    },
    {
      id: 7,
      title: 'Senior Machine Operator - Advanced Manufacturing',
      description: 'Senior machine operator position with leadership responsibilities. 5+ years experience required. Full-time position in Oakville with salary $25-30/hour.',
    },
    {
      id: 8,
      title: 'General Labour - Construction - Build Right Construction',
      description: 'Construction labourers needed for various building projects. Physical work and outdoor conditions. Full-time position in Markham with salary $20-24/hour.',
    },
    {
      id: 9,
      title: 'Forklift Operator - Distribution Center',
      description: 'Certified forklift operators needed for warehouse operations. Must have valid certification. Full-time position in Milton with salary $21-24/hour.',
    },
  ];

  const categories = ['all', 'General Labour', 'Machine Operator', 'Warehouse Workers', 'Packers', 'Machine Handlers', 'Bakery Workers'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.title.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Current <span className="text-blue-600">Job Openings</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our latest job opportunities across various industries and find the perfect match for your skills and career goals.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search jobs, companies, locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-center text-gray-600">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map(job => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  description={job.description}
                />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No jobs found matching your criteria</div>
                <p className="text-gray-600">Try adjusting your search or filter settings</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <CallToAction />
      <Footer />
    </div>
  );
}
