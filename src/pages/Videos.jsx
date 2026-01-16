import { useState, useEffect } from 'react';

import PageHero from '../components/PageHero';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import Section from '../components/Section';

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const videoCategories = [
    {
      title: 'Grup Gündoğarken Konseri',
      videos: [
        {
          title: 'Yaz Bulutları || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'HoYgASyP4gI',
          thumbnail: 'https://img.youtube.com/vi/HoYgASyP4gI/maxresdefault.jpg',
        },
        {
          title: 'Hayallerimi Bırak || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'JT9ULh-DZMs',
          thumbnail: 'https://img.youtube.com/vi/JT9ULh-DZMs/maxresdefault.jpg',
        },
        {
          title: 'Sensiz Olmaz || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'SCY6ZouSReE',
          thumbnail: 'https://img.youtube.com/vi/SCY6ZouSReE/maxresdefault.jpg',
        },
        {
          title: 'Gördüğüme Sevindim || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'IBvOmZ2AiJM',
          thumbnail: 'https://img.youtube.com/vi/IBvOmZ2AiJM/maxresdefault.jpg',
        },
        {
          title: 'Sarılınca Sana || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: '2pYGBMaxbDI',
          thumbnail: 'https://img.youtube.com/vi/2pYGBMaxbDI/maxresdefault.jpg',
        },
        {
          title: 'Sen Benim Şarkılarımsın || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'cczJCK5hn5s',
          thumbnail: 'https://img.youtube.com/vi/cczJCK5hn5s/maxresdefault.jpg',
        },
        {
          title: 'Neler Oluyor Bize || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: '5ysmAXrAriw',
          thumbnail: 'https://img.youtube.com/vi/5ysmAXrAriw/maxresdefault.jpg',
        },
        {
          title: 'Rüzgar || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'oO7NsGIFV9U',
          thumbnail: 'https://img.youtube.com/vi/oO7NsGIFV9U/maxresdefault.jpg',
        },
        {
          title: 'Ayrılığa Dayanamam || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'Js69x0zV-JQ',
          thumbnail: 'https://img.youtube.com/vi/Js69x0zV-JQ/maxresdefault.jpg',
        },
        {
          title: 'Temenni || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'cBcubxGJpC0',
          thumbnail: 'https://img.youtube.com/vi/cBcubxGJpC0/maxresdefault.jpg',
        },
        {
          title: 'Dertli || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: '9yzV76Z-e7g',
          thumbnail: 'https://img.youtube.com/vi/9yzV76Z-e7g/maxresdefault.jpg',
        },
        {
          title: "Ankara'dan Abim Geldi || Bahçedeki Sandal",
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'uGsL-AEh8rM',
          thumbnail: 'https://img.youtube.com/vi/uGsL-AEh8rM/maxresdefault.jpg',
        },
        {
          title: 'Gibi Gibiyim || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'YqXxC_96lqk',
          thumbnail: 'https://img.youtube.com/vi/YqXxC_96lqk/maxresdefault.jpg',
        },
        {
          title: 'Sarmaş Dolaş || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'AdyMDVyoWY0',
          thumbnail: 'https://img.youtube.com/vi/AdyMDVyoWY0/maxresdefault.jpg',
        },
        {
          title: 'Aşk Layık Olanda Kalmalı || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'znw9lIpmtNM',
          thumbnail: 'https://img.youtube.com/vi/znw9lIpmtNM/maxresdefault.jpg',
        },
        {
          title: 'Ellerimde Çiçekler || Bahçedeki Sandal',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: '7swZW0kLmcg',
          thumbnail: 'https://img.youtube.com/vi/7swZW0kLmcg/maxresdefault.jpg',
        },
        {
          title: 'Grup Gündoğarken Şarkılarını Birlikte Söyleyelim Konseri',
          description: 'Grup Gündoğarken Konseri',
          youtubeId: 'EPymaXTtZFA',
          thumbnail: 'https://img.youtube.com/vi/EPymaXTtZFA/maxresdefault.jpg',
        },
      ],
    },

    {
      title: "Pandemi Dönemi Cover'ları",
      videos: [
        {
          title: 'Gülay - Mucize (Cover) - Bahçedeki Sandal',
          description:
            "Pandemi döneminde çektiğimiz Gülay'ın Mucize şarkısının akustik cover'ı",
          youtubeId: 'nJ-OUUNXj9Q',
          thumbnail: 'https://img.youtube.com/vi/nJ-OUUNXj9Q/maxresdefault.jpg',
        },
      ],
    },

    {
      title: 'Ezginin Günlüğü Konseri',
      videos: [
        {
          title: 'Ezginin Günlüğü Konseri - İSBL 2024',
          description:
            "İstanbul'da gerçekleştirdiğimiz Ezginin Günlüğü konseri",
          youtubeId: 'SLgWx6zW7r0',
          thumbnail: 'https://img.youtube.com/vi/SLgWx6zW7r0/hqdefault.jpg',
        },
      ],
    },
  ];

  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="animate-pulse">
          <div className="relative aspect-video bg-neutral-quaternary rounded-base flex items-center justify-center">
            <svg
              className="w-11 h-11 text-fg-disabled"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"
              />
            </svg>
          </div>
          <div className="mt-4 space-y-3">
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex-grow w-full">
      {/* Hero Section */}
      <PageHero
        title="Videolar"
        subtitle="Bahçedeki Sandal'ın konserlerinden ve özel performanslarından videolar."
        backgroundImage="/images/backgrounds/Videos.jpg"
      />

      {videoCategories.map((category, categoryIndex) => (
        <Section key={categoryIndex} className="py-16 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            {category.title}
          </h2>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.videos.map((video, index) => (
                <VideoCard
                  key={index}
                  video={video}
                  onClick={() => setSelectedVideo(video)}
                />
              ))}
            </div>
          )}
        </Section>
      ))}

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </main>
  );
}

export default Videos;
