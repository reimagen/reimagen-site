export default function BrandCard({
  children,
  spacing = 'space-y-4',
  className = '',
}) {
  return (
    <div className={`brand-card ${spacing} ${className}`.trim()}>
      {children}
    </div>
  );
}
