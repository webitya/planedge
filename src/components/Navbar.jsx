"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const services = [
  { name: 'Architectural Design', slug: 'architectural-design' },
  { name: 'Interior Design',       slug: 'interior-design' },
  { name: 'Landscape Design',      slug: 'landscape-design' },
  { name: '3D Elevations',         slug: '3d-elevations' },
  { name: 'Renders',               slug: 'renders' },
  { name: 'Sustainable Home Solutions', slug: 'sustainable-home-solutions' },
  { name: 'Space Planning & Renovations', slug: 'space-planning-renovations' },
  { name: 'Professional Advice',   slug: 'professional-advice' },
  { name: 'Consultation',          slug: 'consultation' },
];

const portfolio = [
  { name: 'Residential', href: '/projects/residential' },
  { name: 'Commercial',  href: '/projects/commercial' },
  { name: 'Interiors',   href: '/projects/interiors' },
];

const navLinks = [
  { name: 'Home',     href: '/' },
  { name: 'About',    href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery',  href: '/gallery' },
  { name: 'Contact',  href: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [drawerOpen, setDrawerOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [scrolled, setScrolled]       = useState(false);
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

  useEffect(() => {
    setDrawerOpen(false);
    setMobileOpen(false);
    setActiveSection(null);
  }, [pathname]);

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
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-primary font-medium text-sm uppercase tracking-wider transition-colors duration-200 hover:opacity-60 ${
                    pathname === link.href ? 'opacity-60' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </div>

            {/* Drawer Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation drawer"
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
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-gray-500 transition-colors font-primary"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-200" />
          <p className="text-xs uppercase tracking-widest text-gray-400 font-heading font-semibold">Services</p>
          {services.map(s => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={() => setMobileOpen(false)}
              className="text-sm hover:text-gray-500 transition-colors pl-2 font-primary"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Full-Width Drawer ── */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${drawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={closeDrawer}
          aria-hidden="true"
        />

        {/* Panel with BG image + gunmetal overlay */}
        <div
          className={`absolute top-0 right-0 h-full w-full overflow-y-auto transition-transform duration-500 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gunmetal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C3539]/95 via-[#1a2024]/92 to-[#0d1012]/96 pointer-events-none" />

          {/* ── All drawer content (relative z-10 to sit above overlay) ── */}
          <div className="relative z-10 flex flex-col justify-center items-center min-h-full px-6 py-16">

            {/* Close button */}
            <button
              onClick={closeDrawer}
              aria-label="Close drawer"
              className="absolute top-5 right-7 text-white/50 hover:text-white transition-colors text-4xl font-extralight leading-none"
            >
              &times;
            </button>

            {/* Content wrapper — compact spacing */}
            <div className="w-full max-w-lg mx-auto flex flex-col items-center">

              {/* Quick nav links */}
              <div className="flex flex-wrap justify-center gap-5 mb-8">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeDrawer}
                    className={`font-heading text-[11px] uppercase tracking-[3px] transition-colors duration-200 ${
                      pathname === link.href
                        ? 'text-white'
                        : 'text-white/35 hover:text-white/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* ── SERVICES Accordion ── */}
              <div className="w-full border-b border-white/10">
                <button
                  onClick={() => toggle('services')}
                  className="w-full flex justify-center items-center gap-4 py-5 group cursor-pointer"
                >
                  <h2 className="font-heading text-2xl md:text-3xl font-extralight tracking-[8px] uppercase text-white/50 group-hover:text-white transition-colors duration-300">
                    Services
                  </h2>
                  <FiChevronDown
                    size={20}
                    className={`text-white/30 group-hover:text-white transition-all duration-300 ${activeSection === 'services' ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'services' ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <ul className="flex flex-col items-center gap-3 pt-1">
                    {services.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          onClick={closeDrawer}
                          className={`font-heading text-[11px] md:text-xs uppercase tracking-[3px] transition-all duration-300 hover:tracking-[5px] ${
                            pathname === `/services/${item.slug}`
                              ? 'text-white'
                              : 'text-white/55 hover:text-white/90'
                          }`}
                        >
                          {item.name}
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
                  className="w-full flex justify-center items-center gap-4 py-5 group cursor-pointer"
                >
                  <h2 className="font-heading text-2xl md:text-3xl font-extralight tracking-[8px] uppercase text-white/50 group-hover:text-white transition-colors duration-300">
                    Portfolio
                  </h2>
                  <FiChevronDown
                    size={20}
                    className={`text-white/30 group-hover:text-white transition-all duration-300 ${activeSection === 'portfolio' ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === 'portfolio' ? 'max-h-[250px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <ul className="flex flex-col items-center gap-3 pt-1">
                    {portfolio.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={closeDrawer}
                          className="font-heading text-[11px] md:text-xs uppercase tracking-[3px] text-white/55 hover:text-white/90 hover:tracking-[5px] transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
