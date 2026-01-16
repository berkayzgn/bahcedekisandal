import { useState } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { MEMBERS } from '../data/members';
import { MEMBER_CATEGORIES, getPrimaryCategory } from '../constants';

function Members() {
  const [filter, setFilter] = useState('all');

  const members = MEMBERS;

  const filteredMembers = members.filter((member) => {
    if (filter === 'all') return true;
    if (filter === 'current') return member.status === 'current';
    if (filter === 'former') return member.status === 'former';
    return true;
  });

  const categories = JSON.parse(JSON.stringify(MEMBER_CATEGORIES));

  filteredMembers.forEach((member) => {
    const category = getPrimaryCategory(member.role);
    categories[category].push(member);
  });

  const sectionMargins = [
    'mb-4',
    'mb-6',
    'mb-8',
    'mb-10',
    'mb-12',
    'mb-16',
    'mb-4',
    'mb-6',
    'mb-8',
    'mb-10',
    'mb-12',
    'mb-16',
  ];

  return (
    <main className="flex-grow w-full">
      {/* Hero Section */}
      <PageHero
        title="Grup Üyeleri"
        subtitle="Geçmişten günümüze grubumuzun bir parçası olan değerli müzisyenler."
        backgroundImage="/images/backgrounds/Members.jpg"
      />

      {/* Filter Section */}
      <Section className="py-8 bg-white">
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1 gap-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setFilter('current')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'current'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Mevcut Üyeler
            </button>
            <button
              onClick={() => setFilter('former')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'former'
                  ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Eski Üyeler
            </button>
          </div>
        </div>
      </Section>
      {/* Members Grid */}
      {Object.entries(categories).map(
        ([categoryName, categoryMembers], index) =>
          categoryMembers.length > 0 && (
            <Section
              key={categoryName}
              className={`py-8 bg-gray-50 dark:bg-black ${
                sectionMargins[index] || 'mb-4'
              }`}
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                {categoryName}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categoryMembers.map((member, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      alt={`${member.name} - ${member.role}`}
                      className={`w-full h-full object-cover brightness-110 ${member.name === 'Asya' ? 'object-center' : ''}`}
                      src={member.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <p className="text-white text-lg font-bold leading-tight mb-1">
                        {member.name}
                      </p>
                      <p className="text-white/90 text-sm font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )
      )}
    </main>
  );
}

export default Members;
