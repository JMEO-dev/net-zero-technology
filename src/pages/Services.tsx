import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import { services } from '@/data/projectAndServices';
import CardList from '@/components/CardList';
import HeroSecondary from '@/components/HeroSecondary';
import { ServicesPath } from '@/data/paths';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSecondary paths={ServicesPath} title='Services' />

      <CardList content={services} title='Our Services' />

      {/* Partners Section */}
      <Partners />

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
};

export default Services;