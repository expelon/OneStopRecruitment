import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      <div className="bg-blue-50 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
