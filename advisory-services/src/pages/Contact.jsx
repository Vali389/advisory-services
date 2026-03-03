import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '919063946065'
const PHONE_DISPLAY = '+91 9063946065'
const EMAIL = 'venkatarohini68@gmail.com'
const ADDRESS = 'Suite No. 502a & b, 5th Floor, Capital Park, Capital Park Road, Silicon Valley, Madhapur, Hyderabad – 500081'
const MAP_EMBED_SRC = 'https://maps.google.com/maps?q=Capital+Park+Madhapur+Hyderabad+500081&t=&z=15&ie=UTF8&iwloc=&output=embed'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = (name, value) => {
    let error = ''
    if (name === 'name') {
      if (!value.trim()) error = 'Please enter your name.'
    }
    if (name === 'email') {
      if (!value.trim()) {
        error = 'Please enter your email.'
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(value)) error = 'Please enter a valid email address.'
      }
    }
    if (name === 'phone') {
      if (!value.trim()) {
        error = 'Please enter your contact number.'
      } else {
        const digitsOnly = value.replace(/\D/g, '')
        if (digitsOnly.length < 10) error = 'Please enter at least 10 digits.'
      }
    }
    if (name === 'message') {
      if (!value.trim()) error = 'Please enter your message.'
    }
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // clear error while typing if it becomes valid
    if (errors[name]) {
      const newError = validateField(name, value)
      setErrors({ ...errors, [name]: newError })
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // run validation for all required fields
    const fieldNames = ['name', 'email', 'phone', 'message']
    const newErrors = {}
    fieldNames.forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Not provided',
      message: formData.message,
      to_email: EMAIL,
    }

    emailjs
      .send('service_gh1f72x', 'template_0hkj701', templateParams)
      .then(() => {
        setSubmitted(true)
        setIsSubmitting(false)
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        setErrors({})
      })
      .catch(() => {
        setIsSubmitting(false)
        alert('There was a problem sending your message. Please try again or email us directly.')
      })
  }

  const quickLinks = [
    { to: '/services', label: 'Our Services' },
    { to: '/about', label: 'About Us' },
    { to: '/why-choose-us', label: 'Why Choose Us' },
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us | SR Advisory Services - Hyderabad</title>
        <meta name="description" content="Contact SR Advisory Services & Navasri Tax. Suite 502, Capital Park, Madhapur, Hyderabad. Call +91 9063946065, WhatsApp, or email venkatarohini68@gmail.com." />
        <link rel="canonical" href="https://sradvisoryservices.com/contact" />
      </Helmet>

      <section className="page-hero page-hero-animated">
        <span className="hero-orb hero-orb-1" aria-hidden="true" />
        <span className="hero-orb hero-orb-2" aria-hidden="true" />
        <span className="hero-orb hero-orb-3" aria-hidden="true" />
        <div className="container">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-subtitle">Get in touch for any queries and services</p>
        </div>
      </section>

      <section className="section contact-intro-strip">
        <div className="container">
          <p className="contact-intro-text">
            We're here to help with loans, tax filings, GST, registrations, and business consulting. Reach out via phone, WhatsApp, or email.
          </p>
        </div>
      </section>

      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-layout">
            {/* Left: Contact info cards */}
            <aside className="contact-sidebar">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card contact-card-whatsapp"
              >
                <span className="contact-info-icon">📱</span>
                <h3>WhatsApp Us</h3>
                <p className="contact-info-value">{PHONE_DISPLAY}</p>
              </a>
              <a href={`tel:${WHATSAPP_NUMBER}`} className="contact-info-card contact-card-call">
                <span className="contact-info-icon">📞</span>
                <h3>Call Us</h3>
                <p className="contact-info-value">{PHONE_DISPLAY}</p>
              </a>
              <a href={`mailto:${EMAIL}`} className="contact-info-card contact-card-email">
                <span className="contact-info-icon">✉️</span>
                <h3>Email Us</h3>
                <p className="contact-info-value">{EMAIL}</p>
              </a>
              <div className="contact-info-card contact-card-visit">
                <span className="contact-info-icon">📍</span>
                <h3>Visit Us</h3>
                <address>{ADDRESS}</address>
              </div>
            </aside>

            {/* Right: Contact form */}
            <div className="contact-form-area">
              <div className="contact-form-header">
                <span className="contact-form-accent" aria-hidden="true" />
                <div>
                  <h2 className="contact-form-title">Send us a message</h2>
                  <p className="contact-form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row contact-form-row-inline">
                  <div className="contact-form-row">
                    <label htmlFor="contact-name">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="field-error">{errors.name}</p>}
                  </div>
                  <div className="contact-form-row">
                    <label htmlFor="contact-email">Enter Your Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="field-error">{errors.email}</p>}
                  </div>
                </div>
                <div className="contact-form-row">
                  <label htmlFor="contact-company">Company Name</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Business Name or Website"
                  />
                </div>
                <div className="contact-form-row">
                  <label htmlFor="contact-phone">Contact Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="field-error">{errors.phone}</p>}
                </div>
                <div className="contact-form-row">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="field-error">{errors.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary contact-form-submit">
                  {isSubmitting ? 'Sending…' : submitted ? 'Message sent' : 'Send message'}
                </button>
              </form>
            </div>
          </div>

          {/* Map section */}
          <div className="contact-map-wrapper">
            <h2 className="contact-map-title">Find us here</h2>
            <div className="contact-map-container">
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SR Advisory Services - Capital Park, Madhapur, Hyderabad"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">Explore More</h2>
            <p className="section-subtitle">Learn about our services and why clients trust us.</p>
          </div>
          <div className="contact-quick-links">
            {quickLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="btn btn-outline">{label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
