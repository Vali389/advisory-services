import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | SR Advisory Services & Navasri Tax - Your Growth Partner</title>
        <meta name="description" content="SR Advisory Services was promoted by G Subramanya Sarma in 2017. 30+ years in finance, direct & indirect taxes, India and abroad. ₹1000+ crores processed. Navasri Tax - trusted advisor for businesses." />
        <link rel="canonical" href="https://sradvisoryservices.com/about" />
      </Helmet>

      <section className="page-hero page-hero-animated">
        <span className="hero-orb hero-orb-1" aria-hidden="true" />
        <span className="hero-orb hero-orb-2" aria-hidden="true" />
        <span className="hero-orb hero-orb-3" aria-hidden="true" />
        <div className="container">
          <h1 className="page-hero-title">About Us</h1>
          <p className="page-hero-subtitle">Your trusted partner in financial and tax advisory</p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">30+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">₹1000+ Cr</span>
              <span className="stat-label">Transactions Processed</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">2017</span>
              <span className="stat-label">Founded</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-with-founder">
            <div className="about-content content-width">
              <h2 className="content-heading">SR Advisory Services</h2>
              <p>
                SR Advisory Services was promoted by <strong>G Subramanya Sarma</strong> during the year 2017. Our reputation is our most treasured quality of service and the foundation on which we have built our company.
              </p>
              <p>
                Subramanya Sarma has <strong>30+ years of experience</strong> in the field of Finance, Direct and indirect taxes, having worked in India and abroad. He has a unique identity of processing <strong>Rs. 1000+ crores</strong> for various companies in India.
              </p>
              <h2 className="content-heading">Our Commitment</h2>
              <p>
                Everyone at Navasri Tax knows that the only way to protect and improve our reputation is to exceed the client's expectations, meet our commitments, innovate in our business and deliver excellence.
              </p>
              <p>
                By understanding and embracing our clients' business problems, vision, project objectives and goals, we build stronger and lasting relationships that yield long-term results. The client starts to look at us as their <strong>trusted advisor</strong> — someone they can count on.
              </p>
              <h2 className="content-heading">Our Focus</h2>
              <p>
                Our single focus is to help <strong>Individuals, entrepreneurs and business owners</strong> start, run and grow their own business and services. We extend our support at every stage throughout their business lifecycle to ensure continual growth.
              </p>
              <h2 className="content-heading">What We Deliver</h2>
              <p>
                We provide advice to all loan aspirants to help navigate the complexities of finances. Our services span <strong>direct and indirect taxation</strong>, funding support, legal financial services, and regulatory compliance. From project reports and bank tie-ups to GST and income tax filing—we ensure you stay compliant while you focus on growth. Our goal is to open the gateway for your success in fulfilling your business requirements.
              </p>
            </div>
            <div className="founder-block">
              <img src="/founder.jpeg" alt="G Subramanya Sarma - Founder & CEO" onError={(e) => { const img = e.target; if (!img.dataset.fallback) { img.dataset.fallback = '1'; img.src = '/founder.png'; } else if (!img.dataset.fallback2) { img.dataset.fallback2 = '1'; img.src = '/founder-placeholder.svg'; } else { img.style.display = 'none'; } }} />
              <div className="founder-info">
                <strong>G. Subramanya Sarma</strong>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="about-mission-vision">
            <div className="about-mission-card">
              <h2 className="about-mv-heading">Our Mission</h2>
              <p className="about-mv-text">To be the most trusted financial and tax advisory partner for individuals and businesses. We strive to simplify complexity, ensure compliance, and open the gateway for our clients' success—helping them start, run, and grow their ventures with confidence.</p>
            </div>
            <div className="about-vision-card">
              <h2 className="about-mv-heading">Our Vision</h2>
              <p className="about-mv-text">To aspire as a world-class service provider in financial advisory, tax compliance, and business consulting. We aim to deliver excellence with utmost quality while continuously improving through client feedback and innovation.</p>
            </div>
          </div>
          <div className="about-cta">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - section on About */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">Trusted advisory built on experience and results.</p>
          </div>
          <ul className="why-list why-list-grid" style={{ maxWidth: '720px', margin: '0 auto 1.5rem' }}>
            {['3 decades of industry expertise', 'Indian & international tax knowledge', 'Personalized, trustworthy guidance', 'Proven results across sectors', 'Hassle-free loans & setup', 'All-in-one financial help'].map((text) => (
              <li key={text}><span className="why-check">✓</span> {text}</li>
            ))}
          </ul>
          <div className="about-cta" style={{ justifyContent: 'center' }}>
            <Link to="/why-choose-us" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Founder quote / commitment */}
      <section className="section section-founder-quote">
        <div className="container content-width">
          <blockquote className="founder-quote">
            <p>Navasri Tax is committed to delivering excellence with utmost quality and aspiring to be a World Class service provider. We look forward to your feedback so we can continuously improve along the way.</p>
            <footer>— G. Subramanya Sarma, Founder & CEO</footer>
          </blockquote>
        </div>
      </section>

      {/* Explore services */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">Explore Our Services</h2>
            <p className="section-subtitle">Financial solutions, tax compliance, and business consulting under one roof.</p>
          </div>
          <div className="about-cta" style={{ justifyContent: 'center' }}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
