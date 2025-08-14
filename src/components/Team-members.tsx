import React from 'react'
import { Leaders, StaffMembers } from "@/data/team"
import { User } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
const TeamMembers = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center my-12 text-foreground">Our Team</h2>
            {/* Management section */}
            <section className="py-16 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg: gap-20 px-8">
                        {Leaders.map((leader, index) => (
                            <div key={index} className="flex flex-col items-center space-x-6 gap-6 ">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-16 h-16 rounded-full object-cover border-green-500 border-2"
                                />
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-2xl">{leader.name}</p>
                                    <p className="text-solar-900">{leader.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Separator className='px-10'/>
            {/* Staff section */}
            <section className="py-16 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-3 lg: gap-20 px-8">

                        {StaffMembers.map((member, index) => (
                            <div className="flex flex-col items-center space-x-6 gap-6 ">
                                {member.image? ( <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-16 h-16 rounded-full object-cover border-green-500 border-2"
                                />):(
                               <User className="w-16 h-16 rounded-full object-cover border-green-500 border-2"/>
                                )}
                               
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-2xl">{member.name}</p>
                                    <p className="text-solar-900">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default TeamMembers