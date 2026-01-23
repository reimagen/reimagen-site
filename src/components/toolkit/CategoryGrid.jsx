import BrandCard from './BrandCard';

export default function CategoryGrid({ columns, accent = 'text-brand-peach', linkColor = 'text-brand-peach', defaultCta = 'Explore →' }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {columns.map((column) => (
        <BrandCard key={column.kicker} className="flex flex-col">
          <p className={`brand-section-kicker ${accent} mb-2`}>{column.kicker}</p>
          {column.title && <h3 className="text-xl font-semibold mb-3">{column.title}</h3>}
          {column.description && <p className="text-sm text-gray-300 mb-5">{column.description}</p>}
          <div className="space-y-3">
            {column.items.map((item, idx) => (
              <div key={item.name} className={`${idx === 0 ? '' : 'pt-3 border-t border-white/10'}`}>
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-semibold">{item.name}</p>
                  {item.note && (
                    <span className="text-[10px] uppercase tracking-wide text-gray-400 text-right">
                      {item.note}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-300 mt-1 mb-4">{item.description}</p>
                {item.link && item.link !== '#' && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-semibold ${linkColor}`}
                  >
                    {item.cta || defaultCta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </BrandCard>
      ))}
    </div>
  );
}
