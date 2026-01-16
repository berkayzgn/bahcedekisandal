import { useCarousel } from '../hooks';
import { CAROUSEL_SETTINGS, IMAGE_PATHS } from '../constants';
import Container from './Container';

function ImageCarousel() {
  // Gallery klasöründeki tüm görseller
  const images = [
    `${IMAGE_PATHS.GALLERY}/01.jpg`,
    `${IMAGE_PATHS.GALLERY}/02.jpg`,
    `${IMAGE_PATHS.GALLERY}/03.jpg`,
    `${IMAGE_PATHS.GALLERY}/04.jpg`,
    `${IMAGE_PATHS.GALLERY}/05.jpg`,
    `${IMAGE_PATHS.GALLERY}/06.jpg`,
    `${IMAGE_PATHS.GALLERY}/07.jpg`,
    `${IMAGE_PATHS.GALLERY}/08.jpeg`,
    `${IMAGE_PATHS.GALLERY}/09.jpeg`,
    `${IMAGE_PATHS.GALLERY}/10.jpeg`,
    `${IMAGE_PATHS.GALLERY}/11.jpeg`,
    `${IMAGE_PATHS.GALLERY}/12.jpeg`,
    `${IMAGE_PATHS.GALLERY}/13.jpeg`,
    `${IMAGE_PATHS.GALLERY}/14.jpg`,
    // Backgrounds klasöründeki görseller
    `${IMAGE_PATHS.BACKGROUNDS}/About.jpg`,
    `${IMAGE_PATHS.BACKGROUNDS}/Concerts.jpg`,
    `${IMAGE_PATHS.BACKGROUNDS}/Home.jpg`,
    `${IMAGE_PATHS.BACKGROUNDS}/Videos.jpg`,
    `${IMAGE_PATHS.BACKGROUNDS}/Members.jpg`,
  ];

  const {
    currentIndex,
    isFading,
    goToNext,
    goToPrevious,
    goToIndex,
    pauseAutoPlay,
    setFading,
  } = useCarousel(
    images,
    CAROUSEL_SETTINGS.AUTO_PLAY_INTERVAL,
    CAROUSEL_SETTINGS.PAUSE_RESUME_DELAY
  );

  return (
    <section className="w-full py-10 bg-gray-100 rounded-lg dark:bg-black">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Galeri
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Müzik yolculuğumuzdan anlar
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src={images[currentIndex]}
              alt={`Galeri görsel ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for transition */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
                isFading ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Left Arrow */}
            <button
              onClick={() => {
                pauseAutoPlay();
                setFading(true);
                setTimeout(() => {
                  goToPrevious();
                  setFading(false);
                }, CAROUSEL_SETTINGS.TRANSITION_DURATION);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all z-10"
              title="Önceki görsel"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => {
                pauseAutoPlay();
                setFading(true);
                setTimeout(() => {
                  goToNext();
                  setFading(false);
                }, CAROUSEL_SETTINGS.TRANSITION_DURATION);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all z-10"
              title="Sonraki görsel"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentIndex) {
                    pauseAutoPlay();
                    setFading(true);
                    setTimeout(() => {
                      goToIndex(index);
                      setFading(false);
                    }, CAROUSEL_SETTINGS.TRANSITION_DURATION);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-black dark:bg-white'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ImageCarousel;
