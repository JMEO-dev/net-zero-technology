import { Dot } from "lucide-react"
import ConsultancyServicesImage from '@/assets/consultancy-services.png';

const ConsultancyServices = () => {
    return (
        <section className=" flex flex-col md:flex-row lg:flex-row justify-between p-16">
            <img
                src={ConsultancyServicesImage}
                alt="Consultancy Services"
                className="max-w-sm w-full  "
            />
            <div className="container flex flex-col justify-center max-w-fit ">
                <h2 className="text-3xl font-bold mb-4 text-solar-900">OUR CONSULTANCY SERVICES </h2>
                <ol>
                    {[
                        "IPP Project development",
                        "Project Proposal preparation with required feasibility studies",
                        "Arrangement of Project Financing",
                        "Project Consultancy",
                    ].map((service, index) => (
                        <li key={index} className='flex flex-row text-sm font-medium text-muted-foreground'>
                            <Dot />
                            <p> {service}</p>
                        </li>
                    ))}
                </ol>
            </div>

        </section >
    )
}

export default ConsultancyServices