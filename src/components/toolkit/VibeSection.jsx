import Link from 'next/link';
import CategoryGrid from './CategoryGrid';
import MobileCardCarousel from './MobileCardCarousel';
import ToolkitSection from './ToolkitSection';
import ToolkitIntro from './ToolkitIntro';
import CardSectionHeading from './CardSectionHeading';
import InfoList from './InfoList';
import ToolkitCTA from './ToolkitCTA';
import BrandCard from './BrandCard';
import { vibeCTACopy } from '../../data/toolkitData';

export default function VibeSection({ sectionKicker, vibeStack, vibeTips, vibeQuestions }) {
  return (
    <ToolkitSection id="vibe">
      <ToolkitIntro
        sectionKicker={`${sectionKicker} text-brand-pink`}
        kickerText="Vibe coders"
        title="Tools for expressive builds and playful shipping"
        description="When you want to create prototypes, explore UIs, and get in flow. These tools keep code optional."
        kickerSizeClass="text-2xl"
      />

      <CategoryGrid
        columns={vibeStack}
        accent="text-brand-pink"
        linkColor="text-brand-pink"
        defaultCta="Dive in →"
      />

      <BrandCard>
        <CardSectionHeading accentClass="text-brand-pink">Real talk</CardSectionHeading>
        <div className="hidden md:block">
          <InfoList items={vibeTips} />
        </div>
        <MobileCardCarousel
          items={vibeTips}
          dotColorClass="bg-brand-pink"
          ariaLabelPrefix="Show tip"
        />
      </BrandCard>

      <BrandCard>
        <CardSectionHeading accentClass="text-brand-pink">Basic safety</CardSectionHeading>
        <div className="hidden md:block">
          <InfoList items={vibeQuestions} />
        </div>
        <MobileCardCarousel
          items={vibeQuestions}
          dotColorClass="bg-brand-pink"
          ariaLabelPrefix="Show answer"
        />
      </BrandCard>

      <BrandCard spacing="space-y-2 text-left text-sm text-gray-300">
        <CardSectionHeading accentClass="text-brand-pink">Feeling FOMO?</CardSectionHeading>
        <p>{vibeCTACopy}</p>
      </BrandCard>

      <div className="text-center">
        <ToolkitCTA
          as={Link}
          href="/contact"
          colorClass="bg-brand-pink hover:bg-brand-pink-dark text-black"
        >
          Get Help →
        </ToolkitCTA>
      </div>
    </ToolkitSection>
  );
}
