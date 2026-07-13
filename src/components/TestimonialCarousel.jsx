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
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-accent text-lg mb-4">{'★'.repeat(current.rating)}</div>

        <div className="min-h-32 md:min-h-24 flex items-center justify-center">
          <p className="font-body text-lg md:text-xl text-text leading-relaxed">
            "{current.quote}"
          </p>
        </div>

        <p className="font-body text-muted text-sm mb-1 mt-6">{current.name}</p>
        <p className="font-body text-muted text-xs mb-8 uppercase tracking-wide">
          {current.service}
        </p>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="text-muted hover:text-accent transition-colors text-xl"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <span
                key={t.id}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? 'bg-accent' : 'bg-muted/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="text-muted hover:text-accent transition-colors text-xl"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel
