import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { CONCERTS } from '../data/concerts';

function Concerts() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const SkeletonLoader = () => (
    <div className="bg-gray-50 dark:bg-gray-700/70 rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-0 animate-pulse">
        {/* Image Skeleton */}
        <div className="relative h-[300px] lg:h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
        </div>
        {/* Content Skeleton */}
        <div className="p-8 lg:p-12 space-y-6">
          <div>
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-lg w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-lg w-32"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-lg w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-lg w-5/6"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-lg w-4/5"></div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <main className="flex-grow w-full">
      <PageHero
        title="Konserlerimiz"
        subtitle="Sahneye taşıdığımız müzik yolculuğumuzdan kareler"
        backgroundImage="/images/backgrounds/Concerts.jpg"
      />

      {/* Concerts Section */}
      <Section className="py-20 bg-white">
        {loading ? (
          <div className="grid md:grid-cols-2 gap-8">
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {CONCERTS.map((concert, index) => (
              <div
                key={concert.id}
                className="bg-gray-50 dark:bg-gray-700/70 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all flex flex-col"
              >
                {/* Image */}
                <div className="relative">
                  <div className="relative w-full h-64">
                    <img
                      src={concert.thumbnail}
                      alt={concert.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* Concert Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <div className="mb-4">
                      <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold mb-2">
                        {concert.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {concert.date}
                        {concert.location && ` • ${concert.location}`}
                      </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {concert.description}
                    </p>

                    <button
                      onClick={() =>
                        (window.location.hash = `concert-detail-${concert.id}`)
                      }
                      className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
                    >
                      Detayları Gör
                    </button>
                  </div>
                  <div className="flex-grow"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}

export default Concerts;
