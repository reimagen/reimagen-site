export default function CardSectionHeading({ accentClass = 'text-brand-lavender', children }) {
  return (
    <p className={`text-sm uppercase tracking-[0.2em] ${accentClass}`}>
      {children}
    </p>
  );
}
