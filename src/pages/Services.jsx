import React from 'react'
import {useState} from 'react'
import {services} from '../data/services'
import ServiceCard from '../components/ServiceCard'
import SeasonFilter from '../components/SeasonFilter'

function Services() {
  //Setting the active season to all to show all of the services available.
  const [activeSeason, setActiveSeason] = useState('all')
  //Filter setup to show selected season. 
  const filteredServices = activeSeason === 'all' ? services : services.filter((service) => service.season.includes(activeSeason))

  return (
    <>
      <section>
        <div>
          <SeasonFilter activeSeason={activeSeason} setActiveSeason={setActiveSeason} />
          <div>
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services