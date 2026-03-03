import { Link } from 'react-router-dom'
import './Footer.css'
import { motion } from 'framer-motion'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/contact', label: 'Contact' },
]

const footerPopularServices = [
  'Project Financing',
  'Personal Loans',
  'Home Loans',
  'Business Loans',
  'GST Filing & Registration',
  'Income Tax Filing',
  'MSME / Udyam Registration',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Brand Column */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="footer-logo-wrap">
            <img
              src="/logo.jpeg"
              alt="Navasri Tax"
              className="footer-logo"
              onError={(e) => {
                const img = e.target
                const next = ['/logo.png', '/logo-navasri.png'][parseInt(img.dataset.fb || '0', 10)]
                if (next) { img.dataset.fb = String(parseInt(img.dataset.fb || '0', 10) + 1); img.src = next }
                else { img.style.display = 'none' }
              }}
            />
          </div>
          <span className="footer-logo-text">SR Advisory Services</span>
          <span className="footer-tagline">Your Growth Partner</span>
          <p className="footer-desc">
            Hyderabad's trusted one-stop financial and legal advisory firm. 30+ years of expertise in loans, tax compliance, and business consulting.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h4>Quick Links</h4>
          <ul>
            {footerLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Popular Services Column */}
        <motion.div
          className="footer-services"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <h4>Popular Services</h4>
          <ul>
            {footerPopularServices.map((svc) => (
              <li key={svc}>
                <Link to="/services">› {svc}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Column */}
        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h4>Contact Us</h4>
          <p>Suite No. 502a &amp; b, 5th Floor,<br />Capital Park, Madhapur,<br />Hyderabad – 500081</p>
          <a href="tel:+919063946065">📞 +91 9063946065</a>
          <a href="mailto:venkatarohini68@gmail.com">✉️ venkatarohini68@gmail.com</a>
          <a
            href="https://wa.me/919063946065"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-wa-btn"
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>

      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} <span className="footer-brand-name">SR Advisory Services</span> &amp; Navasri Tax. All rights reserved.</p>
          <p className="footer-bottom-addr">Suite 502, Capital Park, Madhapur, Hyderabad – 500081</p>
        </div>
      </div>
    </footer>
  )
}
