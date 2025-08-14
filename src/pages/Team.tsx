import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Partners from '@/components/Partners'
import TeamMembers from '@/components/Team-members'
import HeroSecondary from '@/components/HeroSecondary'
import { TeamPath } from '@/data/paths'

const Team = () => {
    return (
        <div>
            <Navigation />
            {/* Hero Section */}
            <HeroSecondary paths={TeamPath} title = 'Team'/>
            {/* Team Section */}
            <TeamMembers />
            {/* Partners Section */}
            <Partners />
            {/* CTA Section */}
            <CTA />
            <Footer />
        </div>

    )
}

export default Team