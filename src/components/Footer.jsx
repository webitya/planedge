"use client";

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';

const services = [
  { name: 'Architectural Design', slug: 'architectural-design' },
  { name: 'Interior Design', slug: 'interior-design' },
  { name: 'Landscape Design', slug: 'landscape-design' },
  { name: '3D Elevations', slug: '3d-elevations' },
  { name: 'Renders', slug: 'renders' },
  { name: 'Sustainable Home Solutions', slug: 'sustainable-home-solutions' },
  { name: 'Space Planning & Renovations', slug: 'space-planning-renovations' },
  { name: 'Professional Advice', slug: 'professional-advice' },
  { name: 'Consultation', slug: 'consultation' }
];

const portfolio = [
  { name: 'Residential', link: '/projects/residential' },
  { name: 'Commercial', link: '/projects/commercial' },
  { name: 'Interiors', link: '/projects/interiors' }
];

const Footer = () => {
  return (
    <footer className="bg-[#2C3539] text-white pt-16 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/20">
        
        {/* Column 1: Brand Profile & Socials */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-bold tracking-[2px]">
              PLANEDGE <span className="font-normal opacity-80 text-lg">ARCHITECT</span>
            </h2>
            <p className="opacity-80 text-xs mt-2 leading-relaxed max-w-xs">
              PLANEDGE ARCHITECT &amp; DESIGN STUDIO is a premium architectural &amp; interior design studio, taking inspiration from the past and client requirements to provide sustainable solutions. We bring your dream vision to life through plans, mood boards, and 3D renderings.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"><FiInstagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"><FiFacebook size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"><FiLinkedin size={20} /></a>
          </div>
        </div>

        {/* Column 2: Services Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-lg font-bold mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white">
            Services
          </h3>
          <div className="flex flex-col gap-2">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                href={`/services/${service.slug}`} 
                className="opacity-80 hover:opacity-100 hover:pl-1 transition-all text-xs"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Portfolio & About Links */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-lg font-bold mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white">
              Portfolio
            </h3>
            <div className="flex flex-col gap-2">
              {portfolio.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.link} 
                  className="opacity-80 hover:opacity-100 hover:pl-1 transition-all text-xs"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/90">
              About
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="opacity-80 hover:opacity-100 hover:pl-1 transition-all text-xs">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Column 4: Contact & Subscribe Form */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white">
            Contact
          </h3>
          <div className="flex flex-col gap-3 text-xs">
            <div className="flex items-start gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <FiMapPin className="mt-0.5 shrink-0" />
              <span>Ranchi, Jharkhand, India</span>
            </div>
            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <FiPhone className="shrink-0" />
              <span>9971189665</span>
            </div>
            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <FiMail className="shrink-0" />
              <span>info@planedgearchitect.com</span>
            </div>
          </div>

          <h3 className="font-heading text-xs font-bold mt-4 tracking-wider uppercase text-white/95">
            Stay Updated
          </h3>
          <form className="flex flex-col gap-2 w-full mt-1" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Full Name"
              className="bg-white/10 text-white text-xs px-3 py-2 rounded border border-white/20 placeholder-white/40 focus:outline-none focus:border-white/50 w-full font-primary"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white/10 text-white text-xs px-3 py-2 rounded border border-white/20 placeholder-white/40 focus:outline-none focus:border-white/50 w-full font-primary"
            />
            <button
              type="submit"
              className="bg-white text-[#2C3539] hover:bg-gray-200 text-xs font-semibold py-2 rounded uppercase tracking-wider transition-colors duration-200 cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
          <div className="flex gap-2 text-[10px] opacity-50 mt-1">
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#" className="hover:underline">Refund Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 opacity-60 text-xs tracking-wide">
        <p className="uppercase">
          &copy; {new Date().getFullYear()} Planedge Architect. All Rights Reserved.
        </p>
        <p>
          Conceptualised, Designed &amp; Developed by{' '}
          <a
            href="https://webitya.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:opacity-100 underline underline-offset-2 transition-opacity"
          >
            Webitya
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
