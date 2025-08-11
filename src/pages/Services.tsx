import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import heroImage from '@/assets/hero-solar-panels.jpg';
import engineerImage from '@/assets/engineer-portrait.jpg';
import consultationImage from '@/assets/consultation-meeting.jpg';

const Services = () => {
  const services = [
    {
      title: "Panel Installation",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      image: engineerImage,
      featured: false
    },
    {
      title: "Consultation",
      description: "Our experts use the latest technology and best practices to ensure that your system is designed for optimal performance.",
      image: consultationImage,
      featured: true
    },
    {
      title: "Customized Solutions",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      image: engineerImage,
      featured: false
    }
  ];

  const partners = [
    'IFC', 'THE WORLD BANK', 'ICA', 'IDCOL', 'ADB',
    'Schneider Electric', 'SUNGROW', 'TrinaSolar', 'Solis', 'SHARP'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-slate-900 to-slate-700 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <p className="text-xl opacity-90">
              <span className="text-solar-300">Home</span> / Services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Services</h2>
          
          {/* First row of services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 ${
                  service.featured ? 'bg-gradient-solar text-white' : 'bg-background'
                }`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-4 ${service.featured ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed ${service.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Second row of services (duplicate for 6 total as shown in reference) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={`second-${index}`} 
                className={`overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 ${
                  service.featured ? 'bg-gradient-solar text-white' : 'bg-background'
                }`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-4 ${service.featured ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed ${service.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Trusted Partners in Finance and Technology</h2>
            <div className="w-24 h-1 bg-gradient-solar mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 bg-background shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="flex items-center justify-center h-16">
                  <span className="font-bold text-foreground text-center">{partner}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-solar-900 to-green-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get In Touch To Discuss How We Can Help You!</h2>
              <p className="text-xl mb-8 opacity-90">We're pleased to be welcoming customers to join us.</p>
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="secondary" size="lg">
                  Request a Quote
                </Button>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Phone: 01234 525 407</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={engineerImage} 
                alt="Solar Engineer" 
                className="w-full max-w-md ml-auto rounded-lg shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;