import Link from 'next/link';

export const metadata = {
  title: 'Residential Projects | Planedge Architect',
  description: 'Explore our finest residential architecture — luxury villas, family homes, and apartment complexes designed with an Indian soul.',
};

const projects = [
  {
    title: 'The Aranya Residence',
    location: 'Ranchi, Jharkhand',
    year: '2023',
    type: 'Villa',
    area: '4,200 sq ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A modern blend of traditional Indian courtyards and contemporary minimalism, nestled in the lush landscapes of Ranchi. The design emphasizes natural light flow, cross-ventilation, and seamless indoor-outdoor living through a series of interconnected courtyards.',
    highlights: ['Open courtyard layout', 'Vastu-compliant orientation', 'Locally sourced Jharkhand stone'],
  },
  {
    title: 'Shanti Niketan Villas',
    location: 'Bhubaneswar, Odisha',
    year: '2022',
    type: 'Villa Community',
    area: '12,000 sq ft (total)',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A gated community of serene villas inspired by vernacular Odisha architecture. Each home features sloped clay-tile roofs, laterite stone walls, and private zen gardens designed for tropical monsoon resilience.',
    highlights: ['Vernacular roof design', 'Monsoon-resilient drainage', 'Private zen gardens'],
  },
  {
    title: 'Panchvati Family Home',
    location: 'Jamshedpur, Jharkhand',
    year: '2024',
    type: 'Independent House',
    area: '3,800 sq ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A multigenerational family home designed around a central tulsi courtyard. The ground floor caters to elderly accessibility while the upper levels provide private quarters for the younger family. Passive cooling and jali screens reduce energy consumption by 40%.',
    highlights: ['Multigenerational living', 'Passive cooling jali screens', 'Central tulsi courtyard'],
  },
  {
    title: 'Meghdhara Lake House',
    location: 'Ranchi, Jharkhand',
    year: '2023',
    type: 'Luxury Residence',
    area: '5,500 sq ft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A cantilevered lakeside retreat featuring floor-to-ceiling glazing that frames panoramic water views. The raw concrete and timber palette blends brutalist strength with warm residential comfort.',
    highlights: ['Lakefront cantilevered deck', 'Floor-to-ceiling glazing', 'Concrete & timber palette'],
  },
  {
    title: 'Vedanta Penthouse',
    location: 'Patna, Bihar',
    year: '2024',
    type: 'Penthouse',
    area: '3,200 sq ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A duplex penthouse with a rooftop infinity terrace overlooking the Ganges. The interiors pair Italian marble with handcrafted Madhubani art panels, creating a fusion of global luxury and Bihar heritage.',
    highlights: ['Rooftop infinity terrace', 'Madhubani art integration', 'Italian marble flooring'],
  },
  {
    title: 'Nirmala Row Houses',
    location: 'Dhanbad, Jharkhand',
    year: '2022',
    type: 'Row House Community',
    area: '18,000 sq ft (total)',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An affordable yet architecturally rich row house development. Each unit features a compact private garden, solar water heating, and fly-ash brick construction that reduces embodied carbon by 35%.',
    highlights: ['Fly-ash brick construction', 'Solar water heating', 'Private compact gardens'],
  },
];

export default function ResidentialPage() {
  return (
    <div className="bg-[#2C3539] min-h-screen text-white overflow-x-hidden">

      {/* Hero */}
      <section
        className="relative h-[55vh] min-h-[420px] flex items-end justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3539]/40 via-[#2C3539]/60 to-[#1e2427]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14 text-center">
          <span className="inline-block mb-4 px-5 py-1.5 border border-white/25 rounded-full text-[10px] font-heading font-semibold uppercase tracking-[4px] text-white/70 bg-white/5 backdrop-blur-sm">
            Projects
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-white leading-tight">
            Residential
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light">
            Luxury villas, family homes, and apartment communities — each designed to honour the local landscape, climate, and culture.
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
                cat.href === '/projects/residential'
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
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232a2e] via-transparent to-transparent" />
                  {/* Type badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#2C3539]/80 backdrop-blur-sm border border-white/10 rounded text-[9px] font-heading uppercase tracking-wider text-white/80">
                    {project.type}
                  </div>
                  {/* Year badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded text-[9px] font-mono text-white/60">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
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

                  {/* Highlights */}
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
          <p className="text-white/40 text-sm mb-4 font-light">Have a residential project in mind?</p>
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
