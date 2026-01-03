import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'General Labour',
      image: '/general.webp',
    },
    {
      name: 'Machine Handlers',
      image: '/machine handler.jpg',
    },
    {
      name: 'Packers',
      image: '/packers.webp',
    },
    {
      name: 'Warehouse Workers',
      image: '/warehouse.webp',
    },
    {
      name: 'Machine Operator',
      image: '/machine operator.webp',
    },
    {
      name: 'Bakery Workers',
      image: '/backery.webp',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">
            Industries We Serve
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Building Stronger, More Efficient Teams by Serving a Wide Range of Industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-white text-xl font-semibold">
                    {industry.name}
                  </h3>
                  <button className="bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
      </main>
      
      <Footer />
    </div>
  );
}
