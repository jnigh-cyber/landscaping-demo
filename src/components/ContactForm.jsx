import { useState } from 'react'

function ContactForm() {

  const [formData, setFormData] = useState({name: '', phone: '', email: '', message: ''});
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const resp = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(formData),
      })

      if (resp.ok) {
        setStatus('Success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('Error');
      }
    } catch (err) {
      setStatus('Error')
    }
  }

  if (status === 'Success') {
    return (
      <section>
        <div>
          <p>
            Thanks!
          </p>
          <p>
            We'll get back with you soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className=''>
        <input 
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
          required
          className=''
        />
        <input 
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Tel Phone #'
          required
          className=''
        />
        <input 
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email address'
          required
          className=''
        />
        <textarea 
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
          required
          row={5}
          className=''
        />
        <button
          type='submit'
          disabled={status === 'submitting'}
          className=''
        >
          {status === 'submitting' ? 'Sending...' : 'Send'}
        </button>

        {status === 'error' && (
          <p className=''>
            Something went wrong... Please try again.
          </p>
        )}
      </form>
    </section>
  )
  
}

export default ContactForm