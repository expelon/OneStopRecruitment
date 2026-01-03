'use client';

import { UserCheck, Building2, Users, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      image: '/general.webp',
      title: 'General Labour',
      description: 'We offer reliable and skilled general labor staffing solutions to businesses in need of extra hands. Our experienced laborers are available for various tasks, including manual labor, assembly, packaging, and more, ensuring your operations run smoothly and efficiently. Whether you need short-term or long-term support, we provide flexible and professional general labor services tailored to meet your company\'s specific needs.',
    },
    {
      image: '/machine handler.jpg',
      title: 'Machine Handlers',
      description: 'We provide trained and reliable machine handlers to operate and maintain machinery in your facility. Our skilled professionals are equipped to handle a wide range of machines, ensuring smooth operations, efficiency, and safety. Whether for production lines, warehouses, or specialized equipment, our machine handlers are dedicated to keeping your machinery running at peak performance.',
    },
    {
      image: '/packers.webp',
      title: 'Packers',
      description: 'We provide experienced and dependable packers to support your packaging and logistics needs. Our team is trained to handle a variety of products with precision and care, ensuring items are packed efficiently, securely, and in accordance with your standards. Whether you\'re running a production line, fulfilling orders in a warehouse, or preparing goods for shipment, our packers help maintain speed.',
    },
    {
      image: '/warehouse.webp',
      title: 'Warehouse Workers',
      description: 'We provide dependable warehouse workers to assist with various tasks, including inventory management, order fulfillment, sorting, and material handling. Our workers are trained to maintain organization, ensure efficient workflows, and support safe practices within your warehouse environment. Whether for short-term projects or long-term support, our team helps keep your operations running smoothly and efficiently.',
    },
    {
      image: '/machine operator.webp',
      title: 'Machine Operator',
      description: 'We provide skilled machine operators to ensure your equipment runs efficiently and safely. Our experienced operators are trained to handle a wide range of machinery, from production equipment to specialized industrial machines. They are committed to maintaining high productivity, minimizing downtime, and adhering to safety standards, helping your operations run smoothly and effectively.',
    },
    {
      image: '/backery.webp',
      title: 'Bakery Workers',
      description: 'We provide experienced and reliable bakery workers to meet the staffing needs of bakeries and food businesses. From skilled bakers and pastry chefs to general kitchen staff, we ensure that our workers are trained, dependable, and ready to help your business thrive. Whether you need temporary support or permanent staff, we connect you with the right talent to maintain high standards and meet production demands.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            Discover Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock Your Potential with Our Offerings
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 bg-white p-2 overflow-hidden">
                <div className="w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
