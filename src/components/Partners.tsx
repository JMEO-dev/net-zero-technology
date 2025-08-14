import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { TechnologyPartners, FinancialPartners } from "@/data/partnerList"

const Partners = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    
    return (
        <>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">
                            Trusted Partners in Finance and Technology
                        </h2>
                        <div className="w-24 h-1 bg-gradient-solar mx-auto"></div>
                    </div>
                    {/*Financial Partners Section */}
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {FinancialPartners.map((partner, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/3 sm:basis-1/4 md:basis-1/5"
                                >
                                    <div className="flex items-center justify-center h-40 w-full">
                                        {partner.logo ? (
                                            <img
                                                src={partner.logo}
                                                alt={partner.title}
                                                className="h-24 w-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                        ) : (
                                            <span className="font-bold text-foreground text-center text-sm">
                                                {partner.title}
                                            </span>
                                        )}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>

                    {/*Technological Partners Section */}

                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {TechnologyPartners.map((partner, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/3 sm:basis-1/4 md:basis-1/5"
                                >
                                    <div className="flex items-center justify-center h-40 w-full">
                                        {partner.logo ? (
                                            <img
                                                src={partner.logo}
                                                alt={partner.title}
                                                className="h-24 w-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                        ) : (
                                            <span className="font-bold text-foreground text-center text-sm">
                                                {partner.title}
                                            </span>
                                        )}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Partners