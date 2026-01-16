import TextType from './TextType';

function PageHero({ title, subtitle, backgroundImage }) {
  const subtitleLines = subtitle
    ? Array.isArray(subtitle)
      ? subtitle
      : [subtitle]
    : [];

  return (
    <div className="@container mb-12">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[40vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.85) 100%), url("${backgroundImage}")`,
          }}
        >
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
            {title}
          </h1>
          {subtitle && (
            <TextType
              text={subtitleLines}
              as="h2"
              className="max-w-4xl text-white/80 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-relaxed"
              typingSpeed={40}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              loop={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHero;
