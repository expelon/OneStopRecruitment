import { Hospital, Code, Factory, DollarSign, ShoppingCart, Truck, Hammer, GraduationCap } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: Hospital, title: 'Healthcare', color: 'bg-red-50 text-red-600 hover:bg-red-600' },
    { icon: Code, title: 'Technology', color: 'bg-blue-50 text-blue-600 hover:bg-blue-600' },
    { icon: Factory, title: 'Manufacturing', color: 'bg-orange-50 text-orange-600 hover:bg-orange-600' },
    { icon: DollarSign, title: 'Finance', color: 'bg-green-50 text-green-600 hover:bg-green-600' },
    { icon: ShoppingCart, title: 'Retail', color: 'bg-purple-50 text-purple-600 hover:bg-purple-600' },
    { icon: Truck, title: 'Logistics', color: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-600' },
    { icon: Hammer, title: 'Construction', color: 'bg-gray-50 text-gray-600 hover:bg-gray-600' },
    { icon: GraduationCap, title: 'Education', color: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600' },
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized staffing solutions across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`group ${industry.color.split(' ')[0]} p-6 sm:p-8 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent hover:shadow-xl`}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Icon className={`h-10 w-10 sm:h-12 sm:w-12 ${industry.color.split(' ')[1]} group-hover:text-white transition-colors`} />
                </div>
                <h3 className={`text-base sm:text-lg font-bold ${industry.color.split(' ')[1]} group-hover:text-white transition-colors`}>
                  {industry.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
