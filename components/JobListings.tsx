import JobCard from './JobCard';
import Link from 'next/link';

export default function JobListings() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      category: 'Technology',
      type: 'Permanent',
      location: 'Toronto, ON',
      description: 'Leading tech company seeking experienced software engineer to join their development team. Work on cutting-edge projects with modern technologies.',
    },
    {
      id: 2,
      title: 'Registered Nurse',
      category: 'Healthcare',
      type: 'Contract',
      location: 'Vancouver, BC',
      description: 'Immediate opening for RN in a state-of-the-art healthcare facility. Competitive compensation and supportive work environment.',
    },
    {
      id: 3,
      title: 'Financial Analyst',
      category: 'Finance',
      type: 'Permanent',
      location: 'Calgary, AB',
      description: 'Join a leading financial institution as a Financial Analyst. Excellent benefits package and career growth opportunities.',
    },
    {
      id: 4,
      title: 'Manufacturing Supervisor',
      category: 'Manufacturing',
      type: 'Permanent',
      location: 'Mississauga, ON',
      description: 'Oversee production operations in a fast-paced manufacturing environment. Leadership experience required.',
    },
    {
      id: 5,
      title: 'Marketing Manager',
      category: 'Marketing',
      type: 'Contract',
      location: 'Montreal, QC',
      description: 'Drive marketing strategy for a dynamic organization. Digital marketing expertise preferred.',
    },
    {
      id: 6,
      title: 'Customer Service Representative',
      category: 'Customer Service',
      type: 'Temporary',
      location: 'Ottawa, ON',
      description: 'Provide exceptional customer support for a growing company. Training provided for the right candidate.',
    },
  ];

  return (
    <section id="jobs" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            Exciting Career Opportunities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Where Opportunity Meets Skilled Workers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              description={job.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/current-openings"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
