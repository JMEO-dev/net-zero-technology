import heroImage from '@/assets/hero-solar-panels.jpg';

const HeroPrimary = () => {
  return (
     <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 md:px-32 lg:px-32 py-16 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Solar Solutions for Tomorrow
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              We empower businesses to meet their sustainability goals with smart, affordable net-zero energy solutions.
            </p>
          </div>
        </div>
      </section>

  )
}

export default HeroPrimary