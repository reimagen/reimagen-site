export default function InfoList({
  items = [],
  spacingClass = 'space-y-3',
  wrapperClass = '',
  titleClass = 'font-semibold text-white',
  detailClass = 'text-sm text-gray-300',
}) {
  if (!items.length) return null;

  return (
    <div className={`${spacingClass} text-left ${wrapperClass}`.trim()}>
      {items.map((item, index) => (
        <div key={item.title || index}>
          {item.title && <p className={titleClass}>{item.title}</p>}
          {item.detail && <p className={detailClass}>{item.detail}</p>}
        </div>
      ))}
    </div>
  );
}
