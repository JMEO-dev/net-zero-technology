import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import HeroSecondary from '@/components/HeroSecondary';
import { ContactUsPath } from '@/data/paths';
import CTA from '@/components/CTA';
import Partners from '@/components/Partners';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}

      <HeroSecondary paths={ContactUsPath} title='Contact Us' />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Contact Us</h1>
            <p className="text-xl text-muted-foreground">Get in touch to discuss your solar energy needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
              <form className="space-y-6">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button variant="solar" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-solar-600" />
                  <div>
                    <h3 className="font-bold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+8801626860701</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-solar-600" />
                  <div>
                    <h3 className="font-bold text-foreground">Email</h3>
                    <p className="text-muted-foreground">absaralvee23@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-solar-600" />
                  <div>
                    <h3 className="font-bold text-foreground">Address</h3>
                    <p className="text-muted-foreground">Main Street, Baridhara Area<br />Dhaka, Bangladesh</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <Partners />
      {/* CTA Section */}
      <CTA />
      <Footer />
    </div>
  );
};

export default Contact;