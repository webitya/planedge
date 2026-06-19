export const metadata = {
  title: 'About | Planedge Architect',
  description: 'Learn about Planedge Architect, our Indian heritage, and our innovative design philosophy.',
};

export default function About() {
  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 pt-12 opacity-0 animate-text-reveal">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#2C3539] mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#2C3539]">Our Story</h1>
          <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">Rooted in India, Designing for the World.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl group">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Planedge Office" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2C3539] mb-6">The Planedge Philosophy</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Founded in Ranchi, Jharkhand, Planedge Architect emerged from a deep appreciation for India's rich architectural heritage and a desire to merge it with contemporary, sustainable design principles.</p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">Our philosophy centers around creating spaces that are not only visually stunning but also deeply connected to their environment and the people who inhabit them. We believe in an 'Indian Soul'—an essence that brings warmth, community, and intricate detailing to modern minimalism.</p>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <span className="block font-heading text-4xl md:text-5xl font-extrabold text-[#2C3539] mb-2">10+</span>
                <span className="block text-sm uppercase tracking-wider text-gray-500 font-semibold">Years of Excellence</span>
              </div>
              <div className="text-center">
                <span className="block font-heading text-4xl md:text-5xl font-extrabold text-[#2C3539] mb-2">150+</span>
                <span className="block text-sm uppercase tracking-wider text-gray-500 font-semibold">Projects Completed</span>
              </div>
              <div className="text-center">
                <span className="block font-heading text-4xl md:text-5xl font-extrabold text-[#2C3539] mb-2">25+</span>
                <span className="block text-sm uppercase tracking-wider text-gray-500 font-semibold">Design Awards</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16">
          <div className="text-center mb-16 relative">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2C3539] mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#2C3539]">Our Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="h-80 mb-6 rounded-lg overflow-hidden shadow-lg relative bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:-translate-y-2"></div>
              <h3 className="font-heading text-2xl font-bold text-[#2C3539] mb-1">Rajiv Sharma</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Principal Architect</p>
            </div>
            <div className="text-center group">
              <div className="h-80 mb-6 rounded-lg overflow-hidden shadow-lg relative bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:-translate-y-2"></div>
              <h3 className="font-heading text-2xl font-bold text-[#2C3539] mb-1">Anita Desai</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Head of Interior Design</p>
            </div>
            <div className="text-center group">
              <div className="h-80 mb-6 rounded-lg overflow-hidden shadow-lg relative bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:-translate-y-2"></div>
              <h3 className="font-heading text-2xl font-bold text-[#2C3539] mb-1">Vikram Singh</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Urban Planner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
