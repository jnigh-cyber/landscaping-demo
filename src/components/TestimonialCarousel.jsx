import React from 'react'
import { useState } from 'react'
import { testimonials } from '../data/testimonials'

function TestimonialCarousel() {

  const [index, setIndex] = useState(0)

  function handlePrev() {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  function handleNext() {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const current = testimonials[index]

  return (
    <>
      <section>
        <div>
          <div>
            {'★'.repeat(current.rating)}
          </div>
          <p>{current.name}</p>
          <p>{current.service}</p>
          <p>"{current.quote}"</p>
          
          <div>
            <button
              onClick={handlePrev}
            >
              ◄
            </button>
            <div>
              {testimonials.map((t, i) => (
                <span
                  key={t.id}>

                </span>
              ))}
            </div>
            <button
              onClick={handleNext}
            >
              ►
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialCarousel