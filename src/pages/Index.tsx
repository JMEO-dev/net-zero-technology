import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Settings, Users, Phone, Star } from 'lucide-react';
import heroImage from '@/assets/hero-solar-panels.jpg';
import engineerImage from '@/assets/engineer-portrait.jpg';
import consultationImage from '@/assets/consultation-meeting.jpg';

import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import CompanyInfo from '@/components/Company-Info';
import Leadership from '@/components/Leadership';

const Index = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Quality Products",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      bgColor: "bg-solar-100"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Excellent Customer Service",
      description: "Our experts use the latest technology and best practices to ensure that your system is designed for optimal performance.",
      bgColor: "bg-gradient-solar text-white"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Plan Ecology",
      description: "Plant ecology is a subdiscipline of ecology focused on the distribution and abundance of plants.",
      bgColor: "bg-solar-100"
    }
  ];

  const mainServices = [
    {
      title: "Panel Installation",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      image: engineerImage
    },
    {
      title: "Consultation",
      description: "Our experts use the latest technology and best practices to ensure that your system is designed for optimal performance.",
      image: consultationImage
    },
    {
      title: "Customized Solutions",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      image: engineerImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Solar Solutions for Tomorrow
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              We empower businesses to meet their sustainability goals with smart, affordable net-zero energy solutions.
            </p>
            <Button variant="solar" size="lg" className="text-lg px-8 py-4">
              Discover More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`p-8 text-center ${service.bgColor} shadow-elegant hover:shadow-glow transition-all duration-300`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${service.bgColor.includes('gradient') ? 'bg-white/20' : 'bg-solar-600 text-white'
                  }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${service.bgColor.includes('gradient') ? 'text-white' : 'text-foreground'}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${service.bgColor.includes('gradient') ? 'text-white/90' : 'text-muted-foreground'}`}>
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-muted/30">
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
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Produce Your Own Clean Save The Environment
            </h2>
            <div className="w-24 h-1 bg-gradient-solar mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-gradient-solar text-white">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="solar" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

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
