function SectionTitle({ title, description }) {
  return (
    <div className="mb-8">
      <h2 className="text-black dark:text-white text-3xl font-bold mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-black/60 dark:text-white/60 text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
