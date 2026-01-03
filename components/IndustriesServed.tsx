export default function IndustriesServed() {
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
      name: 'Warehouse Workers',
      image: '/warehouse.webp',
    },
  ];

  return (
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
          {industries.map((industry) => (
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
  );
}
