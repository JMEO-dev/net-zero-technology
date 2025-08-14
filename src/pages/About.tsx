import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Target, Eye, Lightbulb } from 'lucide-react';
import heroImage from '@/assets/hero-solar-panels.jpg';

import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Speech from '@/components/Speech';
import HeroSecondary from '@/components/HeroSecondary';
import { AboutUsPath } from '@/data/paths';
import MissionAndVision from '@/components/MissionAndVision';
import EPCSolutions from '@/components/EPCSolutions';
import ConsultancyServices from '@/components/ConsultancyServices';
import OperationAndMaintenance from '@/components/OperationAndMaintenance';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
       <HeroSecondary paths={AboutUsPath} title='About Us'/>

      {/* Energize Society Section */}
      <Speech/>

      {/* Mission & Vision Section */}
      <MissionAndVision/>

      {/* EPC Solutions Section */}
      <EPCSolutions/>

      {/* Consultancy Services Section */}
      <ConsultancyServices/>
      
      {/* Operation And Maintenance Section */}
      <OperationAndMaintenance/>

      {/* Partners Section */}
      <Partners />

      {/* CTA Section */}
      <CTA />
      <Footer />
    </div>
  );
};

export default About;