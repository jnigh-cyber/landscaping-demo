import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ContactForm() {
  const location = useLocation()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (location.state?.prefillMessage) {
      setFormData((prev) => ({ ...prev, message: location.state.prefillMessage }))
    }
  }, [location.state])

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.log('Contact form submission failed: ', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-md mx-auto text-center bg-surface rounded-lg p-8">
          <p className="font-display text-2xl text-accent mb-2">Thanks!</p>
          <p className="font-body text-muted">We'll get back to you soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-16 md:py-24">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="bg-surface text-text placeholder-muted rounded px-4 py-3 font-body border border-surface focus:border-accent focus:outline-none transition-colors"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          pattern="^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$"
          className="bg-surface text-text placeholder-muted rounded px-4 py-3 font-body border border-surface focus:border-accent focus:outline-none transition-colors"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          pattern="^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
          className="bg-surface text-text placeholder-muted rounded px-4 py-3 font-body border border-surface focus:border-accent focus:outline-none transition-colors"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          rows={5}
          className="bg-surface text-text placeholder-muted rounded px-4 py-3 font-body border border-surface focus:border-accent focus:outline-none transition-colors resize-none"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-accent text-text font-body font-semibold rounded px-6 py-3 hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send'}
        </button>

        {status === 'error' && (
          <p className="font-body text-sm text-accent text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  )
}

export default ContactForm
