import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, Eye, Lightbulb } from 'lucide-react';
import heroImage from '@/assets/hero-solar-panels.jpg';
import chairmanImage from '@/assets/chairman-portrait.jpg';
import directorImage from '@/assets/director-portrait.jpg';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl opacity-90">
              <span className="text-solar-300">Home</span> / About Us
            </p>
          </div>
        </div>
      </section>

      {/* Energize Society Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Energize Society Reliable Energy
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Net Zero Technologies Ltd. is a leading provider of sustainable energy solutions, with a focus on solar panel installations. 
                Our aim is to help businesses transition to clean energy and achieve net-zero emissions. We provide a range of services 
                to our clients, including consultation, design, installation, and maintenance of solar panel systems.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of experts works closely with each client to understand their energy needs and design a custom solution 
                that meets their requirements. We also offer financing options to make the transition to clean energy more affordable for businesses.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-solar-600 w-5 h-5" />
                  <span className="text-foreground">Quality solar panel installations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-solar-600 w-5 h-5" />
                  <span className="text-foreground">Expert consultation services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-solar-600 w-5 h-5" />
                  <span className="text-foreground">Customized energy solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-solar-600 w-5 h-5" />
                  <span className="text-foreground">Ongoing maintenance support</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Al-Amin Murshed<br />
                <span className="text-solar-600">Chairman</span>
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src={heroImage} 
                alt="Solar installation" 
                className="w-full h-64 object-cover rounded-lg shadow-elegant"
              />
              <img 
                src={heroImage} 
                alt="Solar farm" 
                className="w-full h-48 object-cover rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">MD & Chairman Speech</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chairman Message */}
            <Card className="p-8 bg-background shadow-elegant">
              <div className="flex items-start space-x-6">
                <img 
                  src={chairmanImage} 
                  alt="Al-Amin Murshed" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-solar-600 mb-2">Message from Chairman</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Bangladesh is an emerging power of southeast Asia with rapid economic growth driven by the Industrial Revolution. 
                    Energy is a key component to uphold this pace. Affordable renewable energy will be pivotal to face the upcoming 
                    challenges in the context of the current world with energy crisis. Net-Zero Technologies Ltd formed to fill the 
                    gap regarding technologies and customized renewable energy solutions with committed quality and expertise. 
                    I am wishing a bright future ahead with prosperity of renewable energy in power sector of Bangladesh.
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Al-Amin Murshed<br />
                    <span className="text-solar-600">Chairman</span>
                  </p>
                </div>
              </div>
            </Card>

            {/* Director Message */}
            <Card className="p-8 bg-background shadow-elegant">
              <div className="flex items-start space-x-6">
                <img 
                  src={directorImage} 
                  alt="Twarique Iqbal" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-solar-600 mb-2">Message from Managing Director</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Since 1971, overcoming several turmoil Bangladesh have entered the era of 100% electrification recently. 
                    As this country is blessed with natural gas, till now power generation is heavily dependent on this fossil 
                    fuel which is about to deplete soon due to increasing demand by industries. As an alternative, imported 
                    fossil fuel-based power generation might lead this country's energy security in crisis. Decentralized and 
                    distributed renewable energy can mitigate this situation to a good extent by decreasing dependency on fossil fuels. 
                    We, Net-Zero Technologies Ltd believe in sustainable energy to protect energy independence of Bangladesh.
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Twarique Iqbal<br />
                    <span className="text-solar-600">Managing Director</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="p-8 bg-gradient-solar text-white shadow-glow">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="w-12 h-12 text-white" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="leading-relaxed mb-6">
                According to the recent development Bangladesh has achieved a milestone of 25000MW generation capacity. 
                Considering the energy development roadmap, by 2041 this capacity will be increased up to 60000MW, 
                where 24000MW will come from renewable energy sources.
              </p>
              <p className="leading-relaxed">
                Our mission is to speed up the pace of countries' renewable energy project developments and contribute 
                to achieving the government's target.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 bg-solar-100 border-l-4 border-l-solar-600 shadow-elegant">
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="w-12 h-12 text-solar-600" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Net Zero Technologies Ltd. is a promising provider of sustainable energy solutions, with a specialization 
                in Solar Photovoltaic (PV) systems. Our vision is to provide technological support for the transition of 
                industries to clean energy and achieve net-zero emissions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We provide a range of services to our clients, including consultation, design, installation, and maintenance 
                of solar PV systems. Our team of experts works closely with each client to understand their energy needs and 
                design a custom solution that meets their requirements.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our EPC Solutions</h2>
            <div className="w-24 h-1 bg-gradient-solar mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              'Solar PV Power Plant (IPP)',
              'Industrial Rooftop Solar',
              'Floating Solar',
              'Integrated Fisheries-Solar Power Plant',
              'Agro-Photovoltaic Solar Power Plant',
              'Solar Irrigation',
              'Smart Streetlight',
              'Off-grid Solar based backup system'
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">{service}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Our Consultancy Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• IPP Project development</li>
                  <li>• Project Proposal preparation with required feasibility studies</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Arrangement of Project Financing</li>
                  <li>• Project Consultancy</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Operations and Maintenance (O&M)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quality matters, especially where utilities are concerned. It's crucial to know how to maintain the performance 
                of a large solar power plant and ensure that it is operating at maximum efficiency not just now, but 25 years 
                down the line and beyond. We have an experienced Operations and maintenance division, which takes preventive and 
                corrective maintenance services for solar power plants. Our team operates and maintains solar power plants, 
                offers monthly reporting on generation and activities, and provides project commissioning expertise along with 
                developing mechanisms to retrieve and manage generation data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-solar-900 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch To Discuss How We Can Help You!</h2>
          <p className="text-xl mb-8 opacity-90">We're pleased to be welcoming customers to join us.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="secondary" size="lg">
              Request a Quote
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">📞</span>
              </div>
              <span className="text-lg">Phone: 01234 525 407</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;