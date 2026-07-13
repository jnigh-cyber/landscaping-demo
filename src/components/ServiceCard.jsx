import { Link } from 'react-router-dom'
import { serviceIcons } from '../data/serviceIcons'
import { Sprout } from 'lucide-react'

function ServiceCard({ service }) {
  const Icon = serviceIcons[service.category[0]] || Sprout

  return (
    <Link
      to="/contact"
      state={{ prefillMessage: `I'm interested in: ${service.title}` }}
      className="bg-surface rounded-lg p-6 flex gap-5 border border-surface hover:border-sage/50 transition-colors text-left"
    >
      <div className="shrink-0 w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center">
        <Icon className="text-sage" size={22} />
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg leading-snug">{service.title}</h3>
          <span className="shrink-0 font-body text-xs text-accent border border-accent/40 rounded-full px-3 py-1 whitespace-nowrap">
            from ${service.price}
          </span>
        </div>

        <p className="font-body text-muted text-sm mb-3">{service.description}</p>

        <div className="flex items-center justify-between font-body text-xs text-muted">
          <span>{service.duration}</span>
          <div className="flex gap-1">
            {service.category.map((cat) => (
              <span key={cat} className="uppercase tracking-wide">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
