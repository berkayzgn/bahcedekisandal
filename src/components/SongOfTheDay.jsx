import { SONGS } from '../data/songs';
import Container from './Container';

function SongOfTheDay() {
  // Anın şarkısını seç (10 dakika arayla değişen)
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const songIndex = Math.floor(minutes / 10) % SONGS.length;
  const songOfTheMoment = SONGS[songIndex];

  return (
    <section className="w-full py-16 bg-transparent mb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 text-center">
            Bu Günün Şarkısı
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            {/* Sol Taraf - Şarkı Adı ve Konser */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                {songOfTheMoment?.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-6">
                {songOfTheMoment?.concert.replace(' Konseri', '')}
              </p>
            </div>

            {/* Sağ Taraf - Şarkı Açıklaması */}
            <div className="text-center md:text-left">
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {songOfTheMoment?.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SongOfTheDay;
