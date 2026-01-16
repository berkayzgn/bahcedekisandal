import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { CONCERTS } from '../data/concerts';

function ConcertDetail() {
  const [selectedConcert, setSelectedConcert] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const id = parseInt(hash.split('-').pop());
    const foundConcert = CONCERTS.find((c) => c.id === id) || CONCERTS[0];
    setSelectedConcert(foundConcert);
  }, []);

  if (!selectedConcert) {
    return (
      <main className="flex-grow w-full">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-600 dark:text-gray-400">Konser bulunamadı</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow w-full">
      <PageHero
        title={selectedConcert.title}
        subtitle={selectedConcert.description}
        backgroundImage="/images/backgrounds/Concerts.jpg"
      />

      {/* Concert Selection */}
      <Section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <label
            htmlFor="concert-select"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Konser Seçin:
          </label>
          <select
            id="concert-select"
            value={selectedConcert.id}
            onChange={(e) => {
              const id = parseInt(e.target.value);
              const concert = CONCERTS.find((c) => c.id === id);
              setSelectedConcert(concert);
            }}
            className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {CONCERTS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title} - {c.date}
              </option>
            ))}
          </select>
        </div>
      </Section>

      {/* Concert Detail Section */}
      <Section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Image and Repertoire */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Image */}
            <div>
              <img
                src={selectedConcert.thumbnail}
                alt={selectedConcert.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Repertoire */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Repertuar
              </h3>
              {selectedConcert.repertoire &&
              selectedConcert.repertoire.length > 0 ? (
                <ul className="space-y-3">
                  {selectedConcert.repertoire.map((song, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 text-lg flex items-start"
                    >
                      <span className="text-gray-900 dark:text-white font-bold mr-3">
                        •
                      </span>
                      <span>{song}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Repertuar bilgisi yakında eklenecek.
                </p>
              )}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default ConcertDetail;
