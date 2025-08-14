import React from 'react'
import { Card } from './ui/card'

interface CardContent {
    title: string,
    description: string,
    image: string,
    featured: boolean
}

const CardList = ({ content, title }: { content: CardContent[]; title: string }) => {
    return (
        <>
            {/* Services Grid Section */}
            <section className="py-16 px-16 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{title}</h2>
                    {/* row of cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {content.map((service, index) => (
                            <Card
                                key={index}
                                className= 'overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300  hover:bg-gradient-solar hover:text-white text-black bg-background'
                                    
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className='text-xl font-bold mb-4 text-foreground' >
                                        {service.title}
                                    </h3>
                                    <p className='leading-relaxed text-muted-foreground'>
                                        {service.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardList