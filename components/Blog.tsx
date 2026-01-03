import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Top 10 Interview Tips for 2024',
      excerpt: 'Ace your next interview with these proven strategies. Learn how to make a lasting impression and stand out from other candidates.',
      image: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'January 15, 2024',
      category: 'Career Tips',
    },
    {
      id: 2,
      title: 'The Future of Remote Work',
      excerpt: 'Explore how remote work is reshaping the job market and what it means for employers and employees in the post-pandemic era.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'January 10, 2024',
      category: 'Industry Insights',
    },
    {
      id: 3,
      title: 'Building Your Professional Network',
      excerpt: 'Networking is crucial for career growth. Discover effective strategies to build meaningful professional relationships.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'January 5, 2024',
      category: 'Networking',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-blue-600">Insights</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Career advice, industry trends, and staffing insights
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>

                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 border-2 border-gray-200 hover:border-blue-600">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
