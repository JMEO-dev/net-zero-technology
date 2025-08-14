import missionVisionImage from '@/assets/panelsOnField.png';
import missionImage from '@/assets/missionImage.png';
import visionImage from '@/assets/vision-image.png';

const MissionAndVision = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: `url(${missionVisionImage})` }}
        />
        <div className="container mx-auto py-40 px-32 z-10">
          <div className="grid grid-rows-1 lg:grid-rows-2 gap-20">
            {/* Mission */}
            <div className="container mx-auto flex items-center justify-center bg-green-400 opacity-100 rounded-lg shadow-lg">
              <div className="flex justify-center space-x-10">
                <img
                  src={missionImage}
                  alt="Mission"
                  className="hidden md:block w-full max-w-xs -mt-10 rounded-lg shadow-glow z-20"
                />
                <div className=' flex flex-col  justify-center z-20'>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="  leading-relaxed">
                    According to the recent development Bangladesh has achieved a milestone of 25000MW generation capacity.
                    Considering the energy development roadmap, by 2041 this capacity will be increased up to 60000MW,
                    where 24000MW will come from renewable energy sources.
                    Our mission is to speed up the pace of countries' renewable energy project developments and contribute
                    to achieving the government's target.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="container mx-auto flex items-center justify-center bg-green-400 opacity-100 rounded-lg shadow-lg">
              <div className="flex justify-center space-x-10">
                <img
                  src={visionImage}
                  alt="vision"
                  className="hidden md:block w-full max-w-xs -mt-10 rounded-lg shadow-glow z-20"
                />
                <div className=' flex flex-col  justify-center z-20'>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className=" leading-relaxed">
                    Net Zero Technologies Ltd. is a promising provider of sustainable energy solutions, with a specialization
                    in Solar Photovoltaic (PV) systems. Our vision is to provide technological support for the transition of
                    industries to clean energy and achieve net-zero emissions.
                    We provide a range of services to our clients, including consultation, design, installation, and maintenance
                    of solar PV systems. Our team of experts works closely with each client to understand their energy needs and
                    design a custom solution that meets their requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            {/* <Card className="p-8 bg-solar-100 border-l-4 border-l-solar-600 shadow-elegant">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Net Zero Technologies Ltd. is a promising provider of sustainable energy solutions, with a specialization
                in Solar Photovoltaic (PV) systems. Our vision is to provide technological support for the transition of
                industries to clean energy and achieve net-zero emissions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We provide a range of services to our clients, including consultation, design, installation, and maintenance
                of solar PV systems. Our team of experts works closely with each client to understand their energy needs and
                design a custom solution that meets their requirements.
              </p>
            </Card> */}
          </div>
        </div>
      </section>



    </>
  )
}

export default MissionAndVision