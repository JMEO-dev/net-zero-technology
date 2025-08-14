import { Card, CardHeader } from "./ui/card"
import Icon1 from '@/assets/servrice-overview-1.png';
import Icon2 from '@/assets/servrice-overview-2.png';
import Icon3 from '@/assets/servrice-overview-1.png';

const ServicesOverview = () => {

    const services = [
        {
            icon: Icon1,
            title: "Quality Products",
            description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
        },
        {
            icon: Icon2,
            title: "Excellent Customer Service",
            description: "Our experts use the latest technology and best practices to ensure that your system is designed for optimal performance.",
        },
        {
            icon: Icon3,
            title: "Plan Ecology",
            description: "Plant ecology is a subdiscipline of ecology focused on the distribution and abundance of plants.",
        }
    ];


    return (
        <section className="px-4 md:px-32 lg:px-32 py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className=' bg-solar-50 hover:bg-solar-300 p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-300'>
                            <CardHeader className="p-0 mb-4 flex flex-row gap-2 justify-start items-start">
                                <div className="h-10 w-10 flex justify-center items-center">
                                    <img
                                        src={service.icon}
                                        alt="Net Zero"
                                        className="max-w-sm w-full  "
                                    />
                                </div>
                                <h3 className='text-xl font-bold text-solar-900'>
                                    {service.title}
                                </h3>
                            </CardHeader>
                            <p className='text-muted-foreground text-left'>
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesOverview