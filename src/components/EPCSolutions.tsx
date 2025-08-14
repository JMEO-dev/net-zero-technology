import { Dot } from 'lucide-react'
import EPCSolutionImage from '@/assets/epc-solutions.png';

const EPCSolutions = () => {
    return (
        <section className=" flex flex-col-reverse md:flex-row lg:flex-row px-4 md:px-32 lg:px-32 py-16">
            <div className="container mx-auto px-4 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-solar-900">OUR EPC SOLUTIONS</h2>
                    <ol>
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
                            <li key={index} className='flex flex-row text-sm font-medium text-muted-foreground'>
                                <Dot />
                                <p> {service}</p>
                            </li>
                        ))}
                    </ol>
            </div>
            <img
                src={EPCSolutionImage}
                alt="EPC Solution"
                className="max-w-sm w-full  "
            />
        </section>





    )
}

export default EPCSolutions