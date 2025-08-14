import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { homeServices } from '@/data/projectAndServices';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import CompanyInfo from '@/components/Company-Info';
import Leadership from '@/components/Leadership';
import ServicesOverview from '@/components/ServicesOverview';
import CardList from '@/components/CardList';
import HeroPrimary from '@/components/HeroPrimary';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
     <HeroPrimary/>

      {/* Services Overview Section */}
      <ServicesOverview/>

      {/* Journey Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <img
                src={heroImage}
                alt="Solar Installation"
                className="w-full h-64 object-cover rounded-lg shadow-elegant"
              />
              <img
                src={heroImage}
                alt="Solar Farm"
                className="w-full h-48 object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Our Journey to Sustainable Energy Solutions
              </h2>
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-solar text-white shadow-glow">
                  <h3 className="text-lg font-bold mb-2">Quality Products</h3>
                  <p className="text-white/90">
                    We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-solar text-white shadow-glow">
                  <h3 className="text-lg font-bold mb-2">Expertise and Experience</h3>
                  <p className="text-white/90">
                    Our experts use the latest technology and best practices to ensure that your system is designed for optimal performance.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-solar text-white shadow-glow">
                  <h3 className="text-lg font-bold mb-2">Plan Ecology</h3>
                  <p className="text-white/90">
                    Plant ecology is a subdiscipline of ecology focused on the distribution and abundance of plants.
                  </p>
                </Card>
              </div>
              <Button variant="solar" className="mt-6">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Services Section */}
      <CardList content={homeServices} title='Produce Your Own Clean Save The Environment' />

      {/* Leadership Section */}
      <Leadership />

      {/* Company Info Section */}
      <CompanyInfo />

      {/* Partners Section */}
      <Partners />

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
};

export default Index;
