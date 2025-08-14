import React from 'react'
import PanelImage from '@/assets/Panel-Installation-picture.jpg';
import SolutionImage from '@/assets/customized-solution-picture.jpg';
import Signature from '@/assets/sign-md.png'
const Speech = () => {
    return (
        <section className="py-16 px-20 bg-background">
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
                        
                        <img
                            src={Signature}
                            alt="Solar installation"
                            className="max-w-40 object-cover rounded-lg shadow-elegant"
                        />
                        <p className="text-sm text-muted-foreground italic">
                            Al-Amin Murshed<br />
                            <span className="text-solar-600">Managing Director</span>
                        </p>
                    </div>
                    <div className="space-y-4">
                        <img
                            src={PanelImage}
                            alt="Solar installation"
                            className="w-full h-48 object-cover rounded-lg shadow-elegant"
                        />
                        <img
                            src={SolutionImage}
                            alt="Solar farm"
                            className="w-full h-48 object-cover rounded-lg shadow-elegant"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Speech