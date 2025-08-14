import { Card } from './ui/card'
import { Leaders } from "@/data/team"


const Leadership = () => {
    return (
        <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-solar-900/20 to-green-800/20"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Dedicated Experts Driving Solar Innovation</h2>
                    <div className="w-24 h-1 bg-gradient-solar mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-8">

                    {Leaders.map((leader, index) => (
                        leader.speech &&
                        (
                            <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                                <div className="flex flex-col items-center space-x-6 gap-6 ">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-16 h-16 rounded-full object-cover -mt-16 border-green-500 border-2"
                                    />
                                    <div className="flex-1">
                                        <p className="leading-relaxed mb-4 ">
                                           {leader.speech.substring(0, 150) + (leader.speech.length > 150 ? '...' : '')}
                                        </p>
                                        <div className="mt-4">
                                            <p className="font-bold">{leader.name}</p>
                                            <p className="text-solar-300">{leader.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Leadership