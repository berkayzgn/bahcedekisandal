import PageHero from '../components/PageHero';
import ImageCarousel from '../components/ImageCarousel';
import Section from '../components/Section';

function Home() {
  return (
    <main className="flex-grow w-full relative">
      {/* Hero Section - Full Width */}
      <PageHero
        title="Bahçedeki Sandal"
        subtitle="Müzikle hayat bulan kocaman bir aile"
        backgroundImage="/images/backgrounds/Home.jpg"
      />

      {/* About Section */}
      <Section className="py-20 bg-white mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Biz Kimiz?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Bahçedeki Sandal, müziğin gücüne inanan bir okul grubudur.
              Balıkesir'de{' '}
              <strong>İstanbulluoğlu Sosyal Bilimler Lisesi</strong>'nde kurulan
              grubumuz, öğrenciler ve müzik tutkunlarından oluşuyor.
            </p>
            <a
              href="#about"
              className="inline-block mt-6 text-black dark:text-white font-semibold hover:underline"
            >
              Daha Fazla Bilgi →
            </a>
          </div>
          <div className="relative">
            <img
              src="/images/sbl-logo.jpg"
              alt="Bahçedeki Sandal"
              className="rounded-full shadow-2xl w-32 h-32 md:w-48 md:h-48 object-cover mx-auto"
            />
          </div>
        </div>
      </Section>
      {/* Image Carousel Section */}
      <ImageCarousel />
    </main>
  );
}

export default Home;
