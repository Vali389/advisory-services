import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp'

const reasons = [
  '3 decades of industry expertise',
  'Indian & international tax knowledge',
  'Personalized, trustworthy guidance',
  'Proven results across sectors',
  'Hassle-free loans & setup',
  'All-in-one financial help',
]

export default function WhyChooseUs() {
  return (
    <>
      <Helmet>
        <title>Why Choose Us | SR Advisory Services & Navasri Tax</title>
        <meta name="description" content="Why choose SR Advisory Services: 30+ years expertise, Indian & international tax knowledge, personalized guidance, proven results, hassle-free loans. Your growth partner." />
        <link rel="canonical" href="https://sradvisoryservices.com/why-choose-us" />
      </Helmet>

      <section className="page-hero page-hero-animated">
        <span className="hero-orb hero-orb-1" aria-hidden="true" />
        <span className="hero-orb hero-orb-2" aria-hidden="true" />
        <span className="hero-orb hero-orb-3" aria-hidden="true" />
        <div className="container">
          <h1 className="page-hero-title">Why Choose Us</h1>
          <p className="page-hero-subtitle">Trusted advisory built on experience and results</p>
        </div>
      </section>

      {/* Stats - extra section */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value"><CountUp end={30} suffix="+" /></span>
              <span className="stat-label">Years Expertise</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">₹<CountUp end={1496} suffix=" Crores" /></span>
              <span className="stat-label">Processed</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Trusted</span>
              <span className="stat-label">Advisor</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-width">
          <div className="section-header">
            <h2 className="section-title">Reasons to work with us</h2>
            <p className="section-subtitle">
              We combine deep expertise with a client-first approach to deliver outcomes that matter.
            </p>
          </div>
          <ul className="why-choose-list">
            {reasons.map((text) => (
              <li key={text} className="why-choose-item">
                <span className="why-choose-icon">✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div className="about-cta">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/services" className="btn btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* CTA - extra section */}
      <section className="section cta-strip">
        <div className="container">
          <div className="cta-strip-inner">
            <h2 className="cta-strip-title">Ready to Get Started?</h2>
            <p className="cta-strip-text">Let's discuss how we can support your growth.</p>
            <div className="cta-strip-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <a href="https://wa.me/919063946065" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
