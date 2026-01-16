function VideoCard({ video, onClick }) {
  return (
    <div className="flex flex-col gap-3 group">
      <div
        className="relative w-full overflow-hidden rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
          <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
            <span className="material-symbols-outlined text-white text-4xl">
              play_arrow
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-black dark:text-white text-base font-bold leading-normal group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {video.title}
        </p>
        <p className="text-black/60 dark:text-white/60 text-sm font-normal leading-normal">
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
