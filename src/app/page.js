import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: 'The Aranya Residence',
      location: 'Ranchi, Jharkhand',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A modern blend of traditional Indian courtyards and contemporary minimalism, nestled in the lush landscapes of Ranchi.'
    },
    {
      id: 2,
      title: 'Veda Apartments',
      location: 'Patna, Bihar',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Luxury high-rise apartments emphasizing sustainable living and panoramic views of the city skyline.'
    },
    {
      id: 3,
      title: 'Shanti Niketan Villas',
      location: 'Bhubaneswar, Odisha',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A community of serene villas inspired by vernacular architecture, focusing on natural light and ventilation.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3539]/80 via-[#2C3539]/60 to-[#2C3539]/90"></div>
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10 text-center opacity-0 animate-text-reveal">
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Crafting Spaces with an <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">Indian Soul</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Planedge Architect brings your vision to life through innovative, sustainable, and culturally rooted architectural design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects" className="inline-block px-8 py-4 font-heading font-semibold uppercase tracking-wider rounded border-2 border-transparent bg-[#2C3539] text-white transition-all duration-300 hover:bg-[#3d4a4f] hover:-translate-y-1 hover:shadow-lg">
              Our Portfolio
            </Link>
            <Link href="/contact" className="inline-block px-8 py-4 font-heading font-semibold uppercase tracking-wider rounded border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-[#2C3539] hover:-translate-y-1 hover:shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2C3539] mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#2C3539]">Featured Projects</h2>
            <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">Discover our recent architectural masterpieces that blend modern aesthetics with Indian heritage.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/projects" className="inline-block px-8 py-4 font-heading font-semibold uppercase tracking-wider rounded border-2 border-[#2C3539] text-[#2C3539] transition-all duration-300 hover:bg-[#2C3539] hover:text-white hover:-translate-y-1 hover:shadow-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Collaborative Model Section */}
      <section className="py-24 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl group">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Architects collaborating" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col items-start text-left">
            <h2 className="font-heading text-4xl font-bold text-[#2C3539] mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-20 after:h-1 after:bg-[#2C3539]">Collaborative Design Approach</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed mt-4">At Planedge Architect, we believe that the best spaces are born from collaboration. We work closely with our clients to understand their needs, lifestyle, and aspirations, translating them into functional and beautiful architectural solutions.</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Our process is transparent, iterative, and focused on delivering exceptional quality from concept to completion.</p>
            <Link href="/about" className="inline-block px-8 py-4 font-heading font-semibold uppercase tracking-wider rounded border-2 border-transparent bg-[#2C3539] text-white transition-all duration-300 hover:bg-[#3d4a4f] hover:-translate-y-1 hover:shadow-lg">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
