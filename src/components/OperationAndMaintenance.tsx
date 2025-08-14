import OAndMImage from '@/assets/operation-and-maintenance.png';
const OperationAndMaintenance = () => {
  return (
    <section className=" flex flex-col justify-between items-center gap-6 px-4 md:px-32 lg:px-32 py-16">
      <div className="container flex flex-col justify-center max-w-fit ">
        <h2 className="text-3xl font-bold mb-4 text-solar-900">OPERATIONS AND MAINTENANCE (O&M)</h2>
        <p className="text-muted-foreground leading-relaxed">
          Quality matters, especially where utilities are concerned. It's crucial to know how to maintain the performance
          of a large solar power plant and ensure that it is operating at maximum efficiency not just now, but 25 years
          down the line and beyond. <br/> We have an experienced Operations and maintenance division, which takes preventive and
          corrective maintenance services for solar power plants. Our team operates and maintains solar power plants,
          offers monthly reporting on generation and activities, and provides project commissioning expertise along with
          developing mechanisms to retrieve and manage generation data.
        </p>

      </div>
    <img
        src={OAndMImage}
        alt="OAndM"
        className="w-full md:w-1/2 lg:w-1/3  "
      />
    </section >
  )
}

export default OperationAndMaintenance