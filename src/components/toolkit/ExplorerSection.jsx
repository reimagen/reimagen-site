import Link from 'next/link';
import CategoryGrid from './CategoryGrid';
import MobileCardCarousel from './MobileCardCarousel';
import ToolkitSection from './ToolkitSection';
import ToolkitIntro from './ToolkitIntro';
import CardSectionHeading from './CardSectionHeading';
import InfoList from './InfoList';
import ToolkitCTA from './ToolkitCTA';
import BrandCard from './BrandCard';
import { explorerUseCases, explorerQa, explorerCTACopy } from '../../data/toolkitData';

export default function ExplorerSection({ sectionKicker, explorerTips }) {
  return (
    <ToolkitSection id="explorer">
      <ToolkitIntro
        sectionKicker={`${sectionKicker} text-brand-lavender`}
        kickerText="Non-technical explorers"
        title="A zero-code starter pack for AI beginners"
        description="Think in use cases and immediate wins. Use AI to help take time-heavy executions off your plate."
        kickerSizeClass="text-2xl"
      />

      <div className="space-y-4">
        <CategoryGrid
          columns={explorerUseCases.map((bucket) => ({
            kicker: bucket.category,
            items: bucket.items,
          }))}
          accent="text-brand-lavender"
          linkColor="text-brand-lavender"
          defaultCta="Visit →"
        />
      </div>

      <BrandCard>
        <CardSectionHeading accentClass="text-brand-lavender">
          Three tips for chatting
        </CardSectionHeading>
        <div className="hidden md:block">
          <InfoList items={explorerTips} />
        </div>
        <MobileCardCarousel
          items={explorerTips}
          dotColorClass="bg-brand-lavender"
          ariaLabelPrefix="Show tip"
        />
      </BrandCard>

      <BrandCard>
        <CardSectionHeading accentClass="text-brand-lavender">
          Basic Q&amp;A
        </CardSectionHeading>
        <div className="hidden md:block">
          <InfoList items={explorerQa} />
        </div>
        <MobileCardCarousel
          items={explorerQa}
          dotColorClass="bg-brand-lavender"
          ariaLabelPrefix="Show answer"
        />
      </BrandCard>

      <BrandCard spacing="space-y-2 text-left text-sm text-gray-300">
        <CardSectionHeading accentClass="text-brand-lavender">Need help?</CardSectionHeading>
        <p>{explorerCTACopy}</p>
      </BrandCard>

      <div className="text-center">
        <ToolkitCTA
          as={Link}
          href="/contact"
          colorClass="bg-brand-lavender hover:bg-brand-lavender-dark text-black"
        >
          Book a Consult →
        </ToolkitCTA>
      </div>
    </ToolkitSection>
  );
}
