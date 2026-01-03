import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  title: string;
  description: string;
}

export default function JobCard({ title, description }: JobCardProps) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{description}</p>

      
      <Link
        href="/current-openings"
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:border-black hover:text-black transition-all duration-200 group-hover:border-black group-hover:text-black"
      >
        View Details
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
