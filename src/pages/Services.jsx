import React from 'react'
import {services} from '../data/services'
import ServiceCard from '../components/ServiceCard'

function Services() {
  return (
    <>
      <section>
        <div>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Services