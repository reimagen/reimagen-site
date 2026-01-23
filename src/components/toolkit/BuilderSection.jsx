import Link from 'next/link';
import CategoryGrid from './CategoryGrid';
import ToolkitSection from './ToolkitSection';
import ToolkitIntro from './ToolkitIntro';
import CardSectionHeading from './CardSectionHeading';
import BrandCard from './BrandCard';
import ToolkitCTA from './ToolkitCTA';

export default function BuilderSection({
  sectionKicker,
  builderCategories,
  builderRunnersUp,
}) {
  return (
    <ToolkitSection id="builder">
      <ToolkitIntro
        sectionKicker={`${sectionKicker} text-brand-peach`}
        kickerText="Technical builders"
        title="The no-nonsense dev's power stack"
        description="Proven winners in AI development vs. chasing every new release."
        kickerSizeClass="text-2xl"
      />

      <CategoryGrid
        columns={builderCategories}
        accent="text-brand-peach"
        linkColor="text-brand-peach"
      />

      <BrandCard spacing="space-y-3">
        <CardSectionHeading accentClass="text-brand-peach">Honest mentions</CardSectionHeading>
        <ul className="space-y-2 text-sm text-gray-300">
          {builderRunnersUp.map((tool) => (
            <li key={tool.name}>
              <span className="font-semibold text-white">{tool.name}</span>
              {tool.category && (
                <span className="text-xs uppercase tracking-wide text-gray-400 ml-2">
                  ({tool.category})
                </span>
              )}
              : {tool.note}
            </li>
          ))}
        </ul>
      </BrandCard>

      <div className="text-center">
        <ToolkitCTA
          as={Link}
          href="/contact"
          colorClass="bg-brand-peach hover:bg-brand-peach-dark text-black"
        >
          Talk shop →
        </ToolkitCTA>
      </div>
    </ToolkitSection>
  );
}
