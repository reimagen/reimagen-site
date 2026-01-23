export default function HeroIntro({
  title,
  subhead,
  titleClass = 'text-3xl mb-4 tracking-[0.15em] uppercase text-center',
  subheadClass = 'brand-section-subhead text-brand-lavender text-center',
  wrapperClass = 'text-center space-y-4 max-w-3xl mx-auto',
  titleAs: TitleTag = 'p',
  subheadAs: SubheadTag = 'p',
}) {
  return (
    <header className={wrapperClass}>
      {title && <TitleTag className={titleClass}>{title}</TitleTag>}
      {subhead && <SubheadTag className={subheadClass}>{subhead}</SubheadTag>}
    </header>
  );
}