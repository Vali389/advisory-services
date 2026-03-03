import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Animated counter that counts from 1 up to the target
function CountUp({ end, suffix = '', prefix = '', duration = 1800 }) {
  const [count, setCount] = useState(1)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    let startTime = null
    const startVal = 1
    const endVal = typeof end === 'number' ? end : parseInt(String(end).replace(/[^0-9]/g, ''), 10)
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(startVal + (endVal - startVal) * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

/* Unsplash images - professional advisory/finance (free to use with attribution) */
const serviceCards = [
  {
    title: 'Funding & Loans',
    tagline: 'Smart Capital Solutions to Power Your Business Growth Journey',
    items: ['Personal/Business Loans', 'MSME Loan', 'Mortgage Loan', 'Home/Vehicle Loans', 'Project Finance Solutions'],
    tag: 'Financial Success',
  },
  {
    title: 'Tax & Legal Compliance',
    tagline: 'Ensuring Smooth Operations with Expert Tax and Legal Guidance',
    items: ['GST Filing', 'Income Tax Filing', 'Business Registrations', 'Company Registration', 'DRT and NCLT Legal Handling'],
    tag: 'Tax Smart',
  },
  {
    title: 'Business Services',
    tagline: 'End-to-End Support to Build, Grow, and Scale Seamlessly',
    items: ['Project Reports & Documentation', 'Startup Funding Consultation', 'Business Strategy & Planning', 'Digital Marketing & Branding', 'Business Process Optimization'],
    tag: 'Launch with Impact',
  },
]

const IMG = {
  advisor: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  finance: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  growth: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  loans: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
  tax: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  business: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SR Advisory Services | Your Growth Partner - Loans, GST, Tax & Business Consulting</title>
        <meta name="description" content="SR Advisory Services & Navasri Tax - Your Growth Partner. 30+ years expertise in loans, GST, Income Tax, project finance & business consulting in Hyderabad. Contact +91 9063946065." />
        <link rel="canonical" href="https://sradvisoryservices.com/" />
      </Helmet>

      {/* Hero */}
      <section className="hero hero-with-image hero-animated">
        <div className="hero-bg" aria-hidden="true" />
        <span className="hero-orb hero-orb-1" aria-hidden="true" />
        <span className="hero-orb hero-orb-2" aria-hidden="true" />
        <span className="hero-orb hero-orb-3" aria-hidden="true" />
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">Your Growth Partner</span>
            <h1 className="hero-title">
              Business Growth Starts With The Right Financial & Legal Support
            </h1>
            <p className="hero-subtitle">
              SR Advisory Services Hyderabad — Your one-stop solution for loans, tax compliance, registrations, and business consulting. Led by G Subramanya Sarma with 30+ years of expertise and ₹1000+ crores processed for clients across India and overseas.
            </p>
            <div className="hero-cta">
              <Link to="/services" className="btn btn-primary">Our Services</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
          {/* hero-visual intentionally empty; brand block shown below */}
        </div>
        <div className="hero-scroll">
          <span className="hero-scroll-dot" />
        </div>
      </section>

      {/* Brand Identity Strip */}
      <section className="growth-strip">
        <div className="container growth-strip-inner">
          <div className="growth-strip-text">
            <h2 className="growth-strip-title">Your Growth Partner</h2>
            <p className="growth-strip-sub">SR Advisory Services</p>
            <p className="growth-strip-sub growth-strip-sub2">Navasri Tax</p>
          </div>
          <div className="growth-strip-logo">
            <img src="/logo.jpeg" alt="Navasri Tax" onError={(e) => { const img = e.target; const next = ['/logo.png', '/logo-navasri.png'][parseInt(img.dataset.fb || '0', 10)]; if (next) { img.dataset.fb = String(parseInt(img.dataset.fb || '0', 10) + 1); img.src = next; } else { img.style.display = 'none'; } }} />
          </div>
        </div>
      </section>

      {/* Popular Services - elaborate section */}
      <motion.section
        className="section section-popular-services"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">Popular Services</h2>
            <p className="section-subtitle">Our most sought-after solutions for growth and compliance.</p>
          </div>

          {/* Project Finance - featured block */}
          <motion.div
            className="popular-project-finance"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/services#project-financing" className="popular-project-finance-inner">
              <div className="popular-pf-content">
                <span className="popular-pf-icon">📈</span>
                <div className="popular-pf-text">
                  <h3 className="popular-pf-title">Project Finance</h3>
                  <p className="popular-pf-tagline">Expert funding strategies for new projects & expansions</p>
                  <p className="popular-pf-desc">
                    With over <strong>30+ years of experience</strong> in project reports and funding, we guide you from concept to disbursement. We prepare detailed project reports (DPR), financial projections, CMA data, and viability analysis. Our network connects you with leading banks, NBFCs, and investors—so you can secure the right funding for new projects, expansions, or turnarounds.
                  </p>
                  <ul className="popular-pf-benefits">
                    {['Detailed Project Reports (DPR)', 'Bank, NBFC & investor tie-ups', 'Investor pitch & DPR support', 'CMA data & financial projections', 'Viability & break-even analysis', 'End-to-end funding support'].map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="popular-pf-footer">
                <div className="popular-pf-stats">
                  <span className="popular-pf-stat"><strong>30+</strong> Years</span>
                  <span className="popular-pf-stat"><strong>₹1000+ Cr</strong> Processed</span>
                </div>
                <span className="popular-pf-cta">Explore Project Finance →</span>
              </div>
            </Link>
          </motion.div>

          <div className="popular-services-grid">
            <Link to="/services#personal-loans" className="popular-service-card">
              <span className="popular-service-icon">💳</span>
              <h3 className="popular-service-title">Personal & Business Loans</h3>
              <p className="popular-service-desc">Personal, home, business, and vehicle loans from top banks. Competitive rates, minimal documentation, and quick approvals for salaried and self-employed.</p>
              <span className="popular-service-cta">Learn more →</span>
            </Link>
            <Link to="/services#tax-filings" className="popular-service-card">
              <span className="popular-service-icon">📊</span>
              <h3 className="popular-service-title">GST & Income Tax</h3>
              <p className="popular-service-desc">End-to-end tax compliance: ITR filing, GST registration & returns, TDS, reconciliations, and emergency support during department inspections.</p>
              <span className="popular-service-cta">Learn more →</span>
            </Link>
            <Link to="/services#fssai" className="popular-service-card">
              <span className="popular-service-icon">📋</span>
              <h3 className="popular-service-title">MSME & FSSAI</h3>
              <p className="popular-service-desc">Udyam (MSME) registration, FSSAI license, Startup India, ISO certification. Access government schemes, subsidies, and preferential tenders.</p>
              <span className="popular-service-cta">Learn more →</span>
            </Link>
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </motion.section>

      {/* Trust & Numbers */}
      <motion.section
        className="section section-trust"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="container">
          <div className="trust-grid">
            <div className="trust-card">
              <span className="trust-value"><CountUp end={30} suffix="+" /></span>
              <span className="trust-label">Years Experience</span>
            </div>
            <div className="trust-card">
              <span className="trust-value">₹<CountUp end={1000} suffix="+ Cr" /></span>
              <span className="trust-label">Transactions Processed</span>
            </div>
            <div className="trust-card">
              <span className="trust-value"><CountUp end={2017} /></span>
              <span className="trust-label">Founded</span>
            </div>
            <div className="trust-card">
              <span className="trust-value">One-Stop</span>
              <span className="trust-label">Financial & Legal Support</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What We Offer - 3 premium cards */}
      <motion.section
        className="section section-services-preview"
        id="what-we-offer"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Comprehensive financial solutions for individuals, entrepreneurs, and businesses.</p>
          </div>
          <div className="service-cards service-cards-premium">
            {serviceCards.map((card) => (
              <article key={card.title} className="service-card service-card-premium">
                <div className="service-card-icon-premium">👍</div>
                <h3 className="service-card-title">{card.title}</h3>
                <p className="service-card-tagline">{card.tagline}</p>
                <ul className="service-card-list">
                  {card.items.map((item) => (
                    <li key={item}><span className="check">✓</span> {item.includes('Project Finance') ? <><span className="text-highlight">Project Finance</span> Solutions</> : item}</li>
                  ))}
                </ul>
                <div className="service-card-footer-tag">{card.tag}</div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </motion.section>

      {/* Alt section: Who We Are — Image LEFT, Content RIGHT */}
      <section className="section alt-section alt-section-light">
        <div className="container">
          <motion.div
            className="alt-row alt-row-image-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="alt-image">
              <img src={IMG.advisor} alt="Professional financial advisory team" />
            </div>
            <div className="alt-content">
              <span className="alt-label">Who We Are</span>
              <h2 className="alt-title">Led by a Veteran with 30+ Years of Expertise</h2>
              <p className="alt-text">
                <strong>G Subramanya Sarma</strong> leads SR Advisory Services with deep knowledge in taxation, finance, and regulatory compliance. Having successfully handled transactions worth <strong>₹1000+ crores</strong>, we serve clients both in India and overseas across direct and indirect taxation, funding support, and legal financial services.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alt section: Financial Solutions — Content LEFT, Image RIGHT */}
      <section className="section alt-section alt-section-white">
        <div className="container">
          <motion.div
            className="alt-row alt-row-image-right"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="alt-content">
              <span className="alt-label">Our Mission</span>
              <h2 className="alt-title">Financial Solutions for Every Stage</h2>
              <p className="alt-text">
                We help <strong>individuals, entrepreneurs and business owners</strong> start, run and grow their own business and services. Our single focus is to extend support at every stage throughout your business lifecycle to ensure continual growth.
              </p>
              <p className="alt-text">
                We provide advice to all loan aspirants to help you navigate the complexities of your finances. Our goal is simply to open the gateway for your success in fulfilling your business requirements.
              </p>
              <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
            </div>
            <div className="alt-image">
              <img src={IMG.growth} alt="Business growth and analytics" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alt section: Loans & Funding — Image LEFT, Content RIGHT */}
      <section className="section alt-section alt-section-light">
        <div className="container">
          <motion.div
            className="alt-row alt-row-image-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="alt-image">
              <img src={IMG.loans} alt="Loans and funding solutions" />
            </div>
            <div className="alt-content">
              <span className="alt-label">Funding & Capital</span>
              <h2 className="alt-title">Loan & Funding Assistance</h2>
              <p className="alt-text">
                From personal loans to <span className="text-highlight">Project Finance</span>, we guide you to the right funding options. Home, Personal & Vehicle Loans • Business & <span className="text-highlight">Project Finance</span> • Loan Against Property • MSME & Startup Loans.
              </p>
              <ul className="alt-list">
                <li>Home, Personal & Vehicle Loans</li>
                <li>Business & <span className="text-highlight">Project Finance</span></li>
                <li>Loan Against Property</li>
                <li>MSME & Startup Loans</li>
              </ul>
              <Link to="/services#personal-loans" className="btn btn-primary">View Loan Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alt section: Tax & Compliance — Content LEFT, Image RIGHT */}
      <section className="section alt-section alt-section-white">
        <div className="container">
          <motion.div
            className="alt-row alt-row-image-right"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="alt-content">
              <span className="alt-label">Compliance</span>
              <h2 className="alt-title">Taxation & Compliance</h2>
              <p className="alt-text">
                Stay compliant and focus on growth. We handle Income Tax filing, GST registration and filing, financial project reports, and ensure you meet all regulatory requirements with ease.
              </p>
              <ul className="alt-list">
                <li>Income Tax Filing</li>
                <li>GST Registration & Filing</li>
                <li>Financial Project Reports</li>
              </ul>
              <Link to="/services#tax-filings" className="btn btn-primary">Tax & Compliance Services</Link>
            </div>
            <div className="alt-image">
              <img src={IMG.tax} alt="Tax and financial planning" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alt section: Registrations & Consulting — Image LEFT, Content RIGHT */}
      <section className="section alt-section alt-section-light">
        <div className="container">
          <motion.div
            className="alt-row alt-row-image-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="alt-image">
              <img src={IMG.business} alt="Business consulting and support" />
            </div>
            <div className="alt-content">
              <span className="alt-label">Registrations & Consulting</span>
              <h2 className="alt-title">Registrations & Specialized Consulting</h2>
              <p className="alt-text">
                MSME Registration, Startup India Registration, ISO Certification, FSSAI Registration. Plus DRT & NCLT case handling, business loan documentation, and end-to-end financial advisory.
              </p>
              <ul className="alt-list">
                <li>MSME, Startup India, ISO, FSSAI</li>
                <li>DRT & NCLT Legal Handling</li>
                <li>Business Loan Documentation</li>
                <li>End-to-End Financial Advisory</li>
              </ul>
              <Link to="/services" className="btn btn-primary">All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA — centered, minimal */}
      <motion.section
        className="section cta-strip"
        id="contact-cta"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="container">
          <div className="cta-strip-inner">
            <h2 className="cta-strip-title">Ready to Grow Your Business?</h2>
            <p className="cta-strip-text">Whether you need a loan, tax filing, project finance, or business registration—get in touch for a free consultation. We&apos;re here to help you succeed.</p>
            <div className="cta-strip-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <a href="https://wa.me/919063946065" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp</a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}
