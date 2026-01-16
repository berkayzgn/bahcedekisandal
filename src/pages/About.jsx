import PageHero from '../components/PageHero';
import Section from '../components/Section';

function About() {
  return (
    <main className="flex-grow w-full">
      <PageHero
        title="Hakkımızda"
        subtitle="Müzikle dolu bir yolculuk, samimiyet ve huzur dolu anlar..."
        backgroundImage="/images/backgrounds/About.jpg"
      />

      {/* Biz Kimiz Section */}
      <Section className="py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Biz Kimiz?
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Notalara ve ezgilere olan yolculuğumuz,{' '}
                <strong>İstanbulluoğlu Sosyal Bilimler Lisesi</strong>’nin
                koridorlarında atılan ilk adımlarla, 2011 yılında 16 Mart günü
                başladı. Küçük müzik topluluğu olarak insanüstü bir gayretle
                kendimize bir yol haritası, bir müzik felsefesi arayışına
                girdik. Süreç içerisinde onlarca etkinlik ve festivalde müzik
                severlerle buluştuk.
                <p>
                  2016 yılının ılık bir sonbaharında yol haritamızı ve müzik
                  felsefemiz artık ortaya çıkmıştı. Birden bire gökyüzünde beyaz
                  bir bulut, kırlarda kırmızı gelincik, denizlerde mavi bir
                  balık olduk. Sesimiz sesimize her dokunduğunda gözlerimizin
                  içi pırıldarken, yüreğimiz göğsümüzün kafesinden çıkacak gibi
                  oldu. Çalışmalarımızın sonunda bedenimizin her bir zerresi
                  yorgunluktan ağrırken, güzelden, iyiden ve doğrudan hiç ödün
                  vermedik. Teneffüslerde herkes bir bardak çay içmek için
                  koşarken biz bir nota daha basmak için müzik stüdyosundaydık.
                  Artık notalarla yatıp “olmadı bir daha” ikazlarıyla
                  uyanıyorduk. Bizim için her konser bir son değil, bir
                  sonrakinin doğum sancıları oluyordu.
                </p>
              </p>{' '}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="/images/sbl-logo.jpg"
              alt="İstanbulluoğlu Sosyal Bilimler Lisesi Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full shadow-2xl"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default About;
