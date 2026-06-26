import Link from 'next/link';

export const metadata = {
  title: 'Commercial Projects | Planedge Architect',
  description: 'Modern office parks, corporate headquarters, retail spaces, and hospitality projects designed for performance, aesthetics, and brand identity.',
};

const projects = [
  {
    title: 'Ojas Corporate Park',
    location: 'Jamshedpur, Jharkhand',
    year: '2023',
    type: 'Office Complex',
    area: '48,000 sq ft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A state-of-the-art commercial complex featuring biophilic design and smart energy systems. The double-skin glazed facade reduces solar heat gain by 60% while maintaining panoramic views of the surrounding Dalma hills.',
    highlights: ['Biophilic design', 'Double-skin facade', 'Smart energy BMS'],
  },
  {
    title: 'Aura Boutique Hotel',
    location: 'Darjeeling, West Bengal',
    year: '2021',
    type: 'Hospitality',
    area: '22,000 sq ft',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A luxury hill-station retreat that harmonizes with the terraced terrain, offering unobstructed Himalayan views from every suite. The timber-and-stone construction uses local Darjeeling cedar and hand-cut slate roofing.',
    highlights: ['Himalayan panoramic views', 'Local cedar construction', 'Terraced site integration'],
  },
  {
    title: 'Kavya Cultural Center',
    location: 'Kolkata, West Bengal',
    year: '2025 (Upcoming)',
    type: 'Civic / Cultural',
    area: '35,000 sq ft',
    image: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An iconic civic building designed to celebrate Bengal arts, featuring a contemporary interpretation of traditional terracotta facades. The 800-seat auditorium uses parametric acoustic panels shaped by computational fluid dynamics.',
    highlights: ['Terracotta facade reinterpretation', 'Parametric acoustics', '800-seat auditorium'],
  },
  {
    title: 'Nexus Tech Hub',
    location: 'Ranchi, Jharkhand',
    year: '2024',
    type: 'IT Park',
    area: '65,000 sq ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A campus-style IT park with modular floor plates, collaborative atriums, and rooftop recreation zones. IGBC Gold-rated for water recycling, solar integration, and embodied carbon reduction through prefabricated construction.',
    highlights: ['IGBC Gold rated', 'Modular floor plates', 'Prefab construction'],
  },
  {
    title: 'Prism Retail Mall',
    location: 'Patna, Bihar',
    year: '2023',
    type: 'Retail',
    area: '1,20,000 sq ft',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A three-level retail destination anchored by a dramatic central atrium with a kinetic skylight. The facade features programmable LED mesh panels that transform the building into a luminous urban landmark after dark.',
    highlights: ['Kinetic skylight atrium', 'Programmable LED facade', 'Three-level retail'],
  },
  {
    title: 'Samridhi Co-Working',
    location: 'Dhanbad, Jharkhand',
    year: '2024',
    type: 'Co-Working Space',
    area: '8,500 sq ft',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A warehouse-to-workspace adaptive reuse project converting a disused coal depot into a thriving creative hub. Exposed brick, steel trusses, and polished concrete floors honour the industrial heritage while acoustic pods provide focus zones.',
    highlights: ['Adaptive reuse', 'Industrial heritage', 'Acoustic focus pods'],
  },
];

export default function CommercialPage() {
  return (
    <div className="bg-[#2C3539] min-h-screen text-white overflow-x-hidden">

      {/* Hero */}
      <section
        className="relative h-[55vh] min-h-[420px] flex items-end justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3539]/40 via-[#2C3539]/60 to-[#1e2427]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14 text-center">
          <span className="inline-block mb-4 px-5 py-1.5 border border-white/25 rounded-full text-[10px] font-heading font-semibold uppercase tracking-[4px] text-white/70 bg-white/5 backdrop-blur-sm">
            Projects
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-white leading-tight">
            Commercial
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light">
            Office parks, hotels, cultural centers, and retail destinations — built for brand identity, performance, and community.
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
                cat.href === '/projects/commercial'
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
          <p className="text-white/40 text-sm mb-4 font-light">Planning a commercial or hospitality project?</p>
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
