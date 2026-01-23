export default function ToolkitIntro({
  sectionKicker,
  kickerText,
  title,
  description,
  titleClass = 'text-2xl font-semibold',
  descriptionClass = 'text-gray-300',
  alignmentClass = 'text-center md:text-left',
  kickerSizeClass = '', // New prop for kicker size
}) {
  return (
    <div className={`space-y-3 ${alignmentClass}`}>
      {kickerText && (
        <p className={`${sectionKicker} ${kickerSizeClass}`}>{kickerText}</p>
      )}
      {title && <h2 className={titleClass}>{title}</h2>}
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );
}
