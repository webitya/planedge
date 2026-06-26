import Link from 'next/link';

export const metadata = {
  title: 'Interior Projects | Planedge Architect',
  description: 'Curated interior design projects — living rooms, bedrooms, kitchens, and office interiors crafted with precision, warmth, and cultural elegance.',
};

const projects = [
  {
    title: 'Aranya Residence — Living & Dining',
    location: 'Ranchi, Jharkhand',
    year: '2023',
    type: 'Living Room',
    area: '800 sq ft',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A double-height living room anchored by a custom walnut media wall and floating concrete fireplace. The muted earth-tone palette is punctuated by handwoven Chotanagpur textile cushions and a brass Dhokra chandelier.',
    highlights: ['Double-height ceiling', 'Custom walnut media wall', 'Dhokra brass chandelier'],
  },
  {
    title: 'Vedanta Penthouse — Master Suite',
    location: 'Patna, Bihar',
    year: '2024',
    type: 'Bedroom',
    area: '550 sq ft',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A panoramic master suite with a freestanding Italian marble bathtub framing Ganges views. The bed wall features hand-applied Venetian plaster in oyster grey, backlit by warm LED cove lighting.',
    highlights: ['Venetian plaster walls', 'Freestanding marble bathtub', 'Panoramic river views'],
  },
  {
    title: 'Nexus Tech Hub — CEO Office',
    location: 'Ranchi, Jharkhand',
    year: '2024',
    type: 'Office Interior',
    area: '400 sq ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A corner office blending executive authority with approachability. The pivoting glass wall can open onto the collaborative atrium, while American oak panelling and a live-edge conference desk ground the space.',
    highlights: ['Pivoting glass wall', 'American oak panelling', 'Live-edge conference desk'],
  },
  {
    title: 'Meghdhara Lake House — Kitchen',
    location: 'Ranchi, Jharkhand',
    year: '2023',
    type: 'Kitchen',
    area: '320 sq ft',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A chef-grade kitchen with a 4-metre Neolith island, integrated Gaggenau appliances, and a herb garden window. The charcoal cabinetry is complemented by unlacquered brass hardware that develops a living patina.',
    highlights: ['4m Neolith island', 'Integrated Gaggenau appliances', 'Unlacquered brass hardware'],
  },
  {
    title: 'Samridhi Co-Working — Lounge',
    location: 'Dhanbad, Jharkhand',
    year: '2024',
    type: 'Commercial Interior',
    area: '1,200 sq ft',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An industrial-chic breakout lounge in an adaptive-reuse coal depot. Exposed original brick, reclaimed railway sleeper benches, and acoustic felt ceiling clouds create a warm yet productive atmosphere.',
    highlights: ['Adaptive reuse heritage', 'Railway sleeper benches', 'Acoustic ceiling clouds'],
  },
  {
    title: 'Shanti Niketan — Puja Room',
    location: 'Bhubaneswar, Odisha',
    year: '2022',
    type: 'Sacred Space',
    area: '120 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A contemplative puja room clad in Rajasthani sandstone with CNC-carved geometric jaali panels. Concealed LED niches illuminate brass idols while a ceiling-recessed ventilation system ensures continuous airflow for agarbatti.',
    highlights: ['CNC-carved jaali panels', 'Rajasthani sandstone cladding', 'Recessed ventilation'],
  },
];

export default function InteriorsPage() {
  return (
    <div className="bg-[#2C3539] min-h-screen text-white overflow-x-hidden">

      {/* Hero */}
      <section
        className="relative h-[55vh] min-h-[420px] flex items-end justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3539]/40 via-[#2C3539]/60 to-[#1e2427]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14 text-center">
          <span className="inline-block mb-4 px-5 py-1.5 border border-white/25 rounded-full text-[10px] font-heading font-semibold uppercase tracking-[4px] text-white/70 bg-white/5 backdrop-blur-sm">
            Projects
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-white leading-tight">
            Interiors
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light">
            Living rooms, bedrooms, kitchens, and workspaces — crafted with precision, warmth, and cultural elegance.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <section className="bg-[#1e2427] border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-center gap-1">
          {[
            { name: 'Residential', href: '/projects/residential' },
            { name: 'Commercial', href: '/projects/commercial' },
            { name: 'Interiors', href: '/projects/interiors' },
          ].map(cat => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`px-6 py-4 text-xs font-heading uppercase tracking-[3px] transition-all duration-200 border-b-2 ${
                cat.href === '/projects/interiors'
                  ? 'border-white text-white'
                  : 'border-transparent text-white/40 hover:text-white/70'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#1e2427]">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-[#232a2e] rounded-xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232a2e] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#2C3539]/80 backdrop-blur-sm border border-white/10 rounded text-[9px] font-heading uppercase tracking-wider text-white/80">
                    {project.type}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded text-[9px] font-mono text-white/60">
                    {project.year}
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg font-bold text-white mb-1.5 line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-white/40 mb-3 font-primary">
                    <span>{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{project.area}</span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed mb-4 font-light line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-heading uppercase tracking-wider text-white/50"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block w-full text-center py-2.5 font-heading font-semibold text-[10px] uppercase tracking-wider border border-white/15 text-white/70 rounded transition-all duration-300 hover:bg-white hover:text-[#2C3539] hover:border-white mt-auto"
                  >
                    Enquire About This Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#161a1d] border-t border-white/10 text-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <p className="text-white/40 text-sm mb-4 font-light">Looking to transform your interior spaces?</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 font-heading font-semibold uppercase tracking-wider text-sm bg-white text-[#2C3539] rounded transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-xl"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

    </div>
  );
}
