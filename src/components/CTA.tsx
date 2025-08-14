import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import engineerImage from '@/assets/cta-section-image.png';
import { CompanyBasicInfo } from '@/data/basicInfo';
import { Link } from 'react-router-dom';

const CTA = () => {

    return (
        <>
            <section className=" w-full h-full px-4 md:px-32 lg:px-32 py-16">
                <div className="container bg-gradient-to-r from-solar-900 to-solar-300 text-white relative overflow-visible rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                        <div className=' p-14'>
                            <h2 className="text-3xl font-bold mb-4">Get In Touch To Discuss How We Can Help You!</h2>
                            <p className="text-xl mb-8 opacity-90">We're pleased to be welcoming customers to join us.</p>
                            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                                <Button variant="solar" size="lg">
                                    <Link to="/about/contact">Request a Quote</Link>
                                </Button>
                                {/* <div className="flex  items-center space-x-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm">Phone: {CompanyBasicInfo.phone}</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src={engineerImage}
                                alt="Solar Engineer"
                                className="w-full max-w-md ml-auto -my-20 rounded-lg shadow-glow"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CTA