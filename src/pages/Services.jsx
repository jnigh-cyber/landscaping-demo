import { useState } from 'react'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import SeasonFilter from '../components/SeasonFilter'

function Services() {
  //Setting the active season to all to show all of the services available.
  const [activeSeason, setActiveSeason] = useState('all')
  const filteredServices =
    activeSeason === 'all'
      ? services
      : services.filter((service) => service.season.includes(activeSeason))

  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <SeasonFilter activeSeason={activeSeason} setActiveSeason={setActiveSeason} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
