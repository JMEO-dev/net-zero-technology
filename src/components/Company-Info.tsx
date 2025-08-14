
import consultationImage from '@/assets/consultation-meeting.jpg';

const CompanyInfo = () => {
    return (
        <section className="w-full h-full px-4 md:px-32 lg:px-32 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-solar-900">
                            Discover the Difference in Solar Excellence
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Net Zero Technologies Ltd. is a promising provider of sustainable energy solutions, with a specialization
                            in Solar Photovoltaic (PV) systems. Our vision is to provide technological support for the transition of
                            industries to clean energy and achieve net-zero emissions.
                        </p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Our team of experts works closely with each client to understand their energy needs and design a custom
                            solution that meets their requirements. We also facilitate financing options to make the transition to
                            clean energy more affordable for businesses.
                        </p>
                    </div>
                    <div>
                        <img
                            src={consultationImage}
                            alt="Solar Excellence"
                            className="w-full rounded-lg shadow-elegant"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyInfo