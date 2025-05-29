
import SimpleHero from '@/components/home/SimpleHero';
import QuickSearch from '@/components/home/QuickSearch';
import FeaturedServices from '@/components/home/FeaturedServices';

const SimpleIndex = () => {
  return (
    <div>
      <SimpleHero />
      <QuickSearch />
      <FeaturedServices />
    </div>
  );
};

export default SimpleIndex;
