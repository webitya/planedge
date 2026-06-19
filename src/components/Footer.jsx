import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#2C3539] text-white pt-16 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/20">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-xl font-bold tracking-[2px]">PLANEDGE <span className="font-normal opacity-80 text-lg">ARCHITECT</span></h2>
          <p className="opacity-80 text-sm mt-2 leading-relaxed">Innovative Architecture with an Indian Soul</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white">Contact Us</h3>
          <div className="flex items-start gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <FiMapPin className="mt-1" />
            <span className="text-sm">Ranchi, Jharkhand, India</span>
          </div>
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <FiPhone />
            <span className="text-sm">9971189665</span>
          </div>
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <FiMail />
            <span className="text-sm">info@planedgearchitect.com</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-lg font-bold mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white">Quick Links</h3>
          <Link href="/" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all text-sm">Home</Link>
          <Link href="/about" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all text-sm">About</Link>
          <Link href="/projects" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all text-sm">Projects</Link>
          <Link href="/gallery" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all text-sm">Gallery</Link>
          <Link href="/contact" className="opacity-80 hover:opacity-100 hover:pl-2 transition-all text-sm">Contact</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-lg font-bold mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"><FiInstagram size={24} /></a>
            <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"><FiFacebook size={24} /></a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"><FiLinkedin size={24} /></a>
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
