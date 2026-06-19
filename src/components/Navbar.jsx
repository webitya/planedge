"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const services = [
  'Architectural Design',
  'Interior Design',
  'Landscape Design',
  '3D Elevations',
  'Renders',
  'Sustainable Home Solutions',
  'Space Planning & Renovations',
  'Professional Advice',
  'Consultation',
];

const portfolio = ['Residential', 'Commercial', 'Interiors'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // 'services' | 'portfolio' | null
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const toggle = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setActiveSection(null);
  };

  const isSolid = !isHomePage || scrolled;

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
    isSolid
      ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm text-[#2C3539]'
      : 'py-6 bg-transparent text-white'
  }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-extrabold tracking-[2px] transition-transform duration-300 hover:scale-105">
            PLANEDGE <span className="font-normal opacity-80 text-xl">ARCHITECT</span>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-8">
              <Link href="/" className="font-medium text-sm uppercase tracking-wider transition-colors duration-200 hover:text-gray-400">Home</Link>
              <Link href="/about" className="font-medium text-sm uppercase tracking-wider transition-colors duration-200 hover:text-gray-400">About</Link>
              <Link href="/projects" className="font-medium text-sm uppercase tracking-wider transition-colors duration-200 hover:text-gray-400">Projects</Link>
              <Link href="/gallery" className="font-medium text-sm uppercase tracking-wider transition-colors duration-200 hover:text-gray-400">Gallery</Link>
              <Link href="/contact" className="font-medium text-sm uppercase tracking-wider transition-colors duration-200 hover:text-gray-400">Contact</Link>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </div>

            {/* Drawer Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open services drawer"
              className="flex flex-col justify-center items-end gap-[5px] w-8 h-8 cursor-pointer group shrink-0"
            >
              <span className={`block h-[2px] w-6 transition-all duration-300 group-hover:w-8 ${isSolid ? 'bg-[#2C3539]' : 'bg-white'}`}></span>
              <span className={`block h-[2px] w-4 transition-all duration-300 group-hover:w-8 ${isSolid ? 'bg-[#2C3539]' : 'bg-white'}`}></span>
              <span className={`block h-[2px] w-6 transition-all duration-300 group-hover:w-8 ${isSolid ? 'bg-[#2C3539]' : 'bg-white'}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-lg text-[#2C3539] flex flex-col p-6 gap-4 font-heading text-lg transition-all duration-300 md:hidden ${mobileOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
          <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-gray-500 transition-colors">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-gray-500 transition-colors">About</Link>
          <Link href="/projects" onClick={() => setMobileOpen(false)} className="hover:text-gray-500 transition-colors">Projects</Link>
          <Link href="/gallery" onClick={() => setMobileOpen(false)} className="hover:text-gray-500 transition-colors">Gallery</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-gray-500 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* ── Full-Width Drawer ── */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${drawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

        {/* Full-width dark panel */}
        <div className={`absolute top-0 right-0 h-full w-full bg-[#0d1012] text-white flex flex-col justify-center items-center px-6 py-24 overflow-y-auto transition-transform duration-500 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          {/* Close button */}
          <button
            onClick={closeDrawer}
            aria-label="Close drawer"
            className="absolute top-6 right-8 text-white/60 hover:text-white transition-colors text-5xl font-extralight leading-none"
          >
            &times;
          </button>

          {/* Centered content wrapper */}
          <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-0">

            {/* ── SERVICES Accordion ── */}
            <div className="w-full border-b border-white/10">
              <button
                onClick={() => toggle('services')}
                className="w-full flex justify-center items-center gap-6 py-7 group"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-extralight tracking-[10px] uppercase text-white/60 group-hover:text-white transition-colors duration-300">
                  Services
                </h2>
                <FiChevronDown
                  size={24}
                  className={`text-white/40 group-hover:text-white transition-all duration-300 ${activeSection === 'services' ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'services' ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col items-center gap-5 pt-2">
                  {services.map((item, i) => (
                    <li key={i}>
                      <Link
                        href="/contact"
                        onClick={closeDrawer}
                        className="text-xs md:text-sm uppercase tracking-[4px] text-white/70 hover:text-white hover:tracking-[6px] transition-all duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── PORTFOLIO Accordion ── */}
            <div className="w-full border-b border-white/10">
              <button
                onClick={() => toggle('portfolio')}
                className="w-full flex justify-center items-center gap-6 py-7 group"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-extralight tracking-[10px] uppercase text-white/60 group-hover:text-white transition-colors duration-300">
                  Portfolio
                </h2>
                <FiChevronDown
                  size={24}
                  className={`text-white/40 group-hover:text-white transition-all duration-300 ${activeSection === 'portfolio' ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'portfolio' ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col items-center gap-5 pt-2">
                  {portfolio.map((item, i) => (
                    <li key={i}>
                      <Link
                        href="/projects"
                        onClick={closeDrawer}
                        className="text-xs md:text-sm uppercase tracking-[4px] text-white/70 hover:text-white hover:tracking-[6px] transition-all duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
