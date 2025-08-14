import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import { projects } from '@/data/projectAndServices';
import CardList from '@/components/CardList';
import HeroSecondary from '@/components/HeroSecondary';
import { ProjectsPath } from '@/data/paths';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
       <HeroSecondary paths={ProjectsPath} title = 'Projects'/>

      {/* Projects Grid Section */}
      <CardList content={projects} title='Our Projects' />

      {/* Partners Section */}
      <Partners />

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
};

export default Projects;