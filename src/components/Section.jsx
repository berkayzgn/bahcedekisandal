import Container from './Container';

function Section({ children, className = '' }) {
  const baseClasses = 'w-full rounded-xl dark:bg-gray-900';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <section className={combinedClasses}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;
