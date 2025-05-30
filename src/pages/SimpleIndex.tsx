
import SimpleHero from '@/components/home/SimpleHero';
import QuickSearch from '@/components/home/QuickSearch';
import FeaturedServices from '@/components/home/FeaturedServices';
import Can2025SpecialOffer from '@/components/home/Can2025SpecialOffer';

const SimpleIndex = () => {
  return (
    <div>
      <SimpleHero />
      <QuickSearch />
      <Can2025SpecialOffer />
      <FeaturedServices />
    </div>
  );
};

export default SimpleIndex;
