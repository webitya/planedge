import Link from 'next/link';
import { FiCheck, FiArrowLeft } from 'react-icons/fi';
import { servicesData, servicesOrder } from '@/lib/servicesData';

export default function ServicePageTemplate({ slug }) {
  const service = servicesData[slug];

  return (
    <div className="bg-[#2C3539] min-h-screen text-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section
        className="relative h-[65vh] min-h-[480px] flex items-end justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${service.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3539]/50 via-[#2C3539]/65 to-[#1e2427]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 flex flex-col items-center text-center">
          <span className="inline-block mb-5 px-5 py-1.5 border border-white/25 rounded-full text-[10px] font-heading font-semibold uppercase tracking-[4px] text-white/70 bg-white/5 backdrop-blur-sm">
            Our Services
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-white leading-tight max-w-4xl">
            {service.title}
          </h1>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 md:py-28 bg-[#1e2427]">
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Left: Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-white/20" />
              <span className="text-white/40 font-mono text-xs tracking-[4px] uppercase">{service.index}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              {service.heading}
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-light">
              {service.description}
            </p>

            <ul className="flex flex-col gap-5">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <FiCheck size={11} className="text-white/70" />
                  </div>
                  <span className="text-sm md:text-base text-white/75 font-light leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 font-heading font-semibold uppercase tracking-wider text-sm border-2 border-white/30 text-white rounded transition-all duration-300 hover:bg-white hover:text-[#2C3539] hover:-translate-y-1 hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] rounded-xl pointer-events-none" />
          </div>

        </div>
      </section>

      {/* ── All Services Strip ── */}
      <section className="py-16 bg-[#181c1f] border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[5px] text-white/30 mb-8 text-center font-semibold">
            All Services
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {servicesOrder.map((s) => (
              <Link
                key={s}
                href={`/services/${s}`}
                className={`px-4 py-3 rounded border text-xs font-heading uppercase tracking-wider text-center transition-all duration-200 ${
                  s === slug
                    ? 'border-white/50 bg-white/10 text-white'
                    : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                {servicesData[s].title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next Service ── */}
      <section className="py-20 border-t border-white/10 bg-[#161a1d]">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-heading uppercase tracking-wider transition-colors duration-300 group"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Book a Consultation
          </Link>

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[5px] text-white/30 mb-2 font-semibold">
              Next Service
            </p>
            <Link
              href={`/services/${service.nextSlug}`}
              className="inline-flex items-center gap-3 font-heading text-2xl md:text-3xl font-light text-white hover:text-gray-300 transition-all duration-300 group"
            >
              <span>{service.nextTitle}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2 text-white/50">→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
