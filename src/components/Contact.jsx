import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// --- EmailJS setup ---------------------------------------------------
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> copy its Service ID
// 3. Create an Email Template with variables {{name}}, {{email}}, {{message}}
//    -> copy its Template ID
// 4. Account > General -> copy your Public Key
// Paste all three below. Nothing else in this file needs to change.
const SERVICE_ID = 'service_3ojxtkz'
const TEMPLATE_ID = 'template_u7ss4b2'
const PUBLIC_KEY = 'XFUbERkOLEOxhL7dB'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('sent')
        formRef.current.reset()
      })
      .catch((err) => {
        console.error(err)
        setStatus('error')
      })
  }

  return (
    <section id="contact">
      <div className="wrap">
        <h2 style={{ fontSize: '1.7rem', marginBottom: 12 }}>Get in touch</h2>
        <p className="muted" style={{ marginBottom: 36 }}>
          Have a project in mind, or just want to say hi? Send a message and
          I'll get back to you within a day or two.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 480 }}
        >
          <Field label="Name" name="name" type="text" required />
          <Field label="Email" name="email" type="email" required />
          <div>
            <label htmlFor="message" style={labelStyle}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 6 }}>
            <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'sent' && (
              <span style={{ color: 'var(--teal)', fontSize: '0.9rem' }}>
                Sent — thanks, I'll reply soon.
              </span>
            )}
            {status === 'error' && (
              <span style={{ color: '#d97c7c', fontSize: '0.9rem' }}>
                Something went wrong. Try emailing me directly instead.
              </span>
            )}
          </div>
        </form>

        <p className="muted" style={{ marginTop: 24, fontSize: '0.85rem' }}>
          Prefer email?{' '}
          <a href="mailto:subaneshsubanesh93@gmail.com" style={{ color: 'var(--teal)' }}>
            subaneshsubanesh93@gmail.com
          </a>{' '}
          · +91 90421 90886
        </p>
      </div>
    </section>
  )
}

function Field({ label, name, type, required }) {
  return (
    <div>
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} style={inputStyle} />
    </div>
  )
}

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  color: 'var(--paper-dim)',
  marginBottom: 6,
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  background: 'var(--panel)',
  border: '1px solid var(--line)',
  borderRadius: 3,
  color: 'var(--paper)',
  fontFamily: 'var(--sans)',
  fontSize: '0.95rem',
}
