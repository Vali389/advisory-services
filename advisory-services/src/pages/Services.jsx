import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from '../components/CountUp'

const servicesList = [
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    icon: '💳',
    category: 'Loans & Funding',
    desc: 'Personal loans help you meet expenses without pledging any collateral. We assist salaried professionals and self-employed individuals in securing unsecured personal loans from leading banks and financial institutions for wedding expenses, travel, medical emergencies, education, debt consolidation, or any other personal financial need.',
    points: ['Competitive interest rates from top banks', 'Quick processing with minimal documentation', 'Flexible tenure options up to 5–7 years', 'No collateral required'],
  },
  {
    id: 'home-loans',
    title: 'Home Loans',
    icon: '🏠',
    category: 'Loans & Funding',
    desc: 'Whether you are buying a new home, constructing one, or extending your existing property, we guide you through the best home loan options. We work with major banks and housing finance companies to offer customized solutions with competitive rates, simplified procedures, and flexible EMI options for residential and commercial properties.',
    points: ['Purchase, construction, and extension loans', 'Residential and commercial properties', 'Long tenures up to 30 years', 'Pre-closure and balance-transfer support'],
  },
  {
    id: 'business-loans',
    title: 'Business Loans',
    icon: '💼',
    category: 'Loans & Funding',
    desc: 'Secure loans for starting, expanding, or stabilizing your business. We offer both secured loans (with collateral such as property, land, or machinery at lower interest rates) and unsecured loans (no collateral, ideal for working capital or new ventures). We match you with the right lender based on your business profile and requirements.',
    points: ['Secured and unsecured options', 'Working capital and term loans', 'MSME and startup-friendly schemes', 'Quick turnaround time'],
  },
  {
    id: 'project-financing',
    title: 'Project Financing',
    icon: '📈',
    category: 'Loans & Funding',
    desc: 'Expert advice on financing strategies for new projects and expansions. With over three decades of experience in project reports and funding, we help you secure finance from banks, NBFCs, and investors. We prepare detailed project reports, financial projections, and guide you through the entire funding process from application to disbursement.',
    points: ['Detailed project reports and DPR', 'Bank, NBFC, and investor tie-ups', 'End-to-end funding support', '30+ years of project finance expertise'],
  },
  {
    id: 'loan-against-property',
    title: 'Loan Against Property',
    icon: '🏢',
    category: 'Loans & Funding',
    desc: 'Unlock the value of your fully constructed residential or commercial property. Loan Against Property (LAP) provides substantial funds at competitive rates for business expansion, marriage, medical treatments, education, balance transfer of existing loans, or any other large financial requirement. We facilitate seamless processing with minimal hassle.',
    points: ['Residential and commercial properties', 'Lower interest than personal loans', 'Flexible end-use', 'Balance transfer of high-cost loans'],
  },
  {
    id: 'vehicle-loans',
    title: 'Vehicle Loans',
    icon: '🚗',
    category: 'Loans & Funding',
    desc: 'Finance for new or used (up to 3 years) four-wheelers for individuals. For companies, LLPs, and firms, we assist in securing vehicle loans for directors and employees. We also facilitate takeover of existing vehicle loans from other banks or finance companies for better rates and terms.',
    points: ['New and used car loans', 'Corporate vehicle financing', 'Loan takeover for better rates', 'Wide network of lenders'],
  },
  {
    id: 'fssai',
    title: 'FSSAI Registration',
    icon: '📋',
    category: 'Registrations',
    desc: 'FSSAI (Food Safety and Standards Authority of India) registration or license is mandatory under the FSS Act 2006 for all food business operators. We handle the complete process—registration for small businesses and license for larger operations—ensuring you receive your 14-digit FSSAI number for product labelling and legal compliance.',
    points: ['Registration and license as per turnover', '14-digit FSSAI number', 'Product labelling compliance', 'Renewal and amendment support'],
  },
  {
    id: 'msme-registration',
    title: 'MSME / Udyam Registration',
    icon: '📄',
    category: 'Registrations',
    desc: 'Register your business under the Udyam Registration (MSME) scheme to access government benefits, subsidies, and preferential treatment in tenders. We assist with the online registration process, documentation, and ensure your unit is correctly classified for maximum benefit eligibility.',
    points: ['Online Udyam registration', 'Access to government schemes', 'Preferential treatment in tenders', 'Bank credit linkage benefits'],
  },
  {
    id: 'startup-india',
    title: 'Startup India Registration',
    icon: '🚀',
    category: 'Registrations',
    desc: 'Get your venture recognized under the Startup India initiative for tax benefits, funding support, and easier compliance. We guide you through eligibility check, DIPP recognition, and help you leverage benefits such as income tax exemption and self-certification under various labour laws.',
    points: ['DIPP recognition', 'Income tax exemption benefits', 'Simplified compliance', 'Funding and incubation support'],
  },
  {
    id: 'iso-certification',
    title: 'ISO Certification',
    icon: '🏅',
    category: 'Registrations',
    desc: 'ISO certification demonstrates your commitment to quality and standards. We assist with ISO 9001 (Quality Management), ISO 14001 (Environmental Management), and other certifications. From gap analysis to documentation and audit support, we ensure a smooth certification journey.',
    points: ['ISO 9001, 14001, and more', 'Gap analysis and documentation', 'Audit preparation support', 'Renewal and surveillance'],
  },
  {
    id: 'tax-filings',
    title: 'Income Tax & GST Filings',
    icon: '📊',
    category: 'Tax & Compliance',
    desc: 'Complete tax compliance for individuals and businesses. We handle Income Tax returns, TDS compliance, and corporate tax filings. For GST, we offer end-to-end support including registration, monthly/quarterly returns, reconciliations, and emergency assistance during inspections. Stay compliant while you focus on your business.',
    points: ['Income Tax: ITR, TDS, corporate returns', 'GST: Registration, returns, reconciliation', 'Emergency support during inspections', 'Regular updates on tax changes'],
  },
  {
    id: 'gst-registration',
    title: 'GST Registration & Filing',
    icon: '📑',
    category: 'Tax & Compliance',
    desc: 'GST registration is mandatory for businesses exceeding the turnover threshold. We handle new GST registration, amendment, cancellation, and monthly or quarterly return filing. Our team ensures timely compliance and is available for urgent support during department audits or notices.',
    points: ['New registration and amendments', 'GSTR-1, GSTR-3B, annual returns', 'Input tax credit reconciliation', 'Audit and notice support'],
  },
  {
    id: 'financial-reports',
    title: 'Financial Project Reports',
    icon: '📈',
    category: 'Tax & Compliance',
    desc: 'Professionally prepared project reports for bank loans, investor pitches, and government schemes. We create detailed financial projections, viability analysis, and documentation as per bank and institutional requirements. Over 30 years of experience in project report preparation.',
    points: ['Bank-ready project reports', 'DPR for institutional funding', 'CMA data and projections', 'Viability and break-even analysis'],
  },
  {
    id: 'drt-nclt',
    title: 'DRT & NCLT Case Handling',
    icon: '⚖️',
    category: 'Corporate & Consulting',
    desc: 'Specialized support for debt recovery and insolvency matters. We assist in Debt Recovery Tribunal (DRT) and National Company Law Tribunal (NCLT) cases—representing both banks and borrowers. Our expertise covers restructuring, settlement negotiations, and legal representation for recovery and insolvency proceedings.',
    points: ['DRT and NCLT representation', 'Settlement and restructuring', 'Bank and borrower support', 'Insolvency and recovery guidance'],
  },
  {
    id: 'loan-documentation',
    title: 'Business Loan Documentation',
    icon: '📂',
    category: 'Corporate & Consulting',
    desc: 'End-to-end documentation support for business loans—from application to disbursement. We help compile KYC, financial statements, project reports, property papers, and all other documents required by banks and NBFCs. Our structured approach reduces delays and improves sanction chances.',
    points: ['Complete document compilation', 'Bank and NBFC requirements', 'KYC and financial statements', 'Faster processing support'],
  },
  {
    id: 'corporate-services',
    title: 'End-to-End Financial Advisory',
    icon: '🏛️',
    category: 'Corporate & Consulting',
    desc: 'Comprehensive financial advisory for businesses and individuals. We offer ROC compliance, Importer Exporter Code (IEC), company registration, partnership deeds, and strategic financial planning. Our goal is to be your single point of contact for all financial and regulatory needs.',
    points: ['ROC filings and compliance', 'IEC and company registration', 'Partnership and LLP formation', 'Strategic financial planning'],
  },
]

const categories = ['All', 'Loans & Funding', 'Registrations', 'Tax & Compliance', 'Corporate & Consulting']

const getCatSlug = (label) => label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices = activeCategory === 'All'
    ? servicesList
    : servicesList.filter((s) => s.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Our Services | Loans, Tax, GST, Project Finance & Business Consulting - SR Advisory</title>
        <meta name="description" content="SR Advisory Services: Personal & Home Loans, Business & Project Finance, GST & Income Tax Filing, FSSAI & MSME Registration, DRT/NCLT, Company Registration. Hyderabad." />
        <link rel="canonical" href="https://sradvisoryservices.com/services" />
      </Helmet>

      <section className="page-hero page-hero-animated">
        <span className="hero-orb hero-orb-1" aria-hidden="true" />
        <span className="hero-orb hero-orb-2" aria-hidden="true" />
        <span className="hero-orb hero-orb-3" aria-hidden="true" />
        <div className="container">
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-subtitle">Comprehensive financial solutions for individuals, corporates and organizations</p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="services-intro-strip">
        <div className="container">
          <p className="services-intro-strip-text">30+ years of expertise. Loans, tax, registrations & consulting — all under one roof. Your trusted partner for financial success.</p>
        </div>
      </section>

      {/* Category tabs - click to filter cards */}
      <nav className="service-category-nav" aria-label="Service categories">
        <div className="container">
          <div className="service-category-nav-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`service-category-nav-link ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Why Choose SR Advisory - quick benefits */}
      <section className="section section-services-why">
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">Why Choose SR Advisory</h2>
            <p className="section-subtitle">Trusted by individuals and businesses across India for over three decades.</p>
          </div>
          <div className="services-why-grid">
            <div className="services-why-card">
              <span className="services-why-icon">⏱️</span>
              <h3 className="services-why-title">Quick Turnaround</h3>
              <p className="services-why-desc">Streamlined processes and minimal documentation for faster approvals.</p>
            </div>
            <div className="services-why-card">
              <span className="services-why-icon">🤝</span>
              <h3 className="services-why-title">Personalized Support</h3>
              <p className="services-why-desc">Dedicated guidance tailored to your unique financial needs.</p>
            </div>
            <div className="services-why-card">
              <span className="services-why-icon">📊</span>
              <h3 className="services-why-title">30+ Years Experience</h3>
              <p className="services-why-desc">₹1496 Crores processed. Deep expertise in tax, loans & compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - cards display only when category selected */}
      <section className="section section-services-detail-blocks" id="services-cards">
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              {activeCategory === 'All'
                ? 'End-to-end support for loans, tax compliance, registrations and specialized consulting.'
                : `Showing ${filteredServices.length} service${filteredServices.length !== 1 ? 's' : ''} in ${activeCategory}`}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="service-detail-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredServices.map((service, idx) => (
                <motion.article
                  key={service.id}
                  id={service.id}
                  className={`service-detail-card ${service.id === 'project-financing' ? 'service-detail-card-highlight' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                >
                  <div className="service-detail-icon-wrap">
                    <span className="service-detail-icon">{service.icon}</span>
                  </div>
                  <div className="service-detail-body">
                    {service.id === 'project-financing' && <span className="popular-service-badge">Popular</span>}
                    <h4 className="service-detail-title">{service.id === 'project-financing' ? <><span className="text-highlight">Project Finance</span>ing</> : service.title}</h4>
                    <p className="service-detail-desc">{service.desc}</p>
                    <ul className="service-detail-points">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary btn-sm service-detail-cta">Enquire now</Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <p className="service-no-results">No services in this category. Try selecting another.</p>
          )}
        </div>
      </section>

      {/* How We Work - process steps */}
      <section className="section section-services-process">
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">A simple, transparent process to get you started.</p>
          </div>
          <div className="services-process-grid">
            <div className="services-process-step">
              <span className="services-process-num">1</span>
              <h3 className="services-process-title">Consultation</h3>
              <p className="services-process-desc">Share your requirements. We understand your goals and recommend the best options.</p>
            </div>
            <div className="services-process-step">
              <span className="services-process-num">2</span>
              <h3 className="services-process-title">Documentation</h3>
              <p className="services-process-desc">We guide you through documents needed and prepare everything for a smooth submission.</p>
            </div>
            <div className="services-process-step">
              <span className="services-process-num">3</span>
              <h3 className="services-process-title">Processing</h3>
              <p className="services-process-desc">We handle approvals, follow-ups and ensure timely completion of your work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section section-who-we-serve">
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">Who We Serve</h2>
            <p className="section-subtitle">Supporting individuals and businesses at every stage of their journey.</p>
          </div>
          <div className="who-we-serve-grid">
            <div className="who-we-serve-card">
              <span className="who-we-serve-icon">👤</span>
              <h3 className="who-we-serve-title">Individuals</h3>
              <p className="who-we-serve-desc">Personal loans, home loans, vehicle loans, and tax filing for salaried and self-employed professionals.</p>
            </div>
            <div className="who-we-serve-card">
              <span className="who-we-serve-icon">🏢</span>
              <h3 className="who-we-serve-title">Entrepreneurs</h3>
              <p className="who-we-serve-desc">Business loans, MSME registration, startup funding, project reports, and company formation.</p>
            </div>
            <div className="who-we-serve-card">
              <span className="who-we-serve-icon">🏭</span>
              <h3 className="who-we-serve-title">Corporates</h3>
              <p className="who-we-serve-desc">GST compliance, ROC filings, ISO certification, DRT/NCLT support, and financial advisory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & sectors */}
      <section className="section section-industries">
        <div className="container">
          <div className="section-header section-header-center">
            <h2 className="section-title">Industries & Sectors</h2>
            <p className="section-subtitle">We serve clients across manufacturing, trading, services, and more.</p>
          </div>
          <div className="industries-tags">
            <span className="industry-tag">Manufacturing</span>
            <span className="industry-tag">Trading</span>
            <span className="industry-tag">Food & F&B</span>
            <span className="industry-tag">Real Estate</span>
            <span className="industry-tag">Technology</span>
            <span className="industry-tag">Retail</span>
            <span className="industry-tag">Healthcare</span>
            <span className="industry-tag">Professional Services</span>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="section services-stats-strip">
        <div className="container">
          <div className="services-stats-grid">
            <div className="services-stat">
              <span className="services-stat-value"><CountUp end={30} suffix="+" /></span>
              <span className="services-stat-label">Years Experience</span>
            </div>
            <div className="services-stat">
              <span className="services-stat-value">₹<CountUp end={1496} suffix=" Crores" /></span>
              <span className="services-stat-label">Transactions</span>
            </div>
            <div className="services-stat">
              <span className="services-stat-value"><CountUp end={15} suffix="+" /></span>
              <span className="services-stat-label">Services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-strip">
        <div className="container">
          <div className="cta-strip-inner">
            <h2 className="cta-strip-title">Need Help Choosing a Service?</h2>
            <p className="cta-strip-text">Reach out for a consultation. We&apos;re here to guide you.</p>
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
