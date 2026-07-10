import React from 'react'

function ServiceCard({ service }) {
  return (
  <>
    <div>
      {service.category.map((cat) => (
        <span
          key={cat}
        >
          {cat}
        </span>
      ))}

      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
    <div>
      <div>
        <span>{service.price}</span>
      </div>
      <span>{service.duration}</span>
    </div>
  </>
  )
}

export default ServiceCard