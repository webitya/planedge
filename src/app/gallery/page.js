export const metadata = {
  title: 'Gallery | Planedge Architect',
  description: 'A visual collection of our architectural and interior design work.',
};

export default function Gallery() {
  // A collection of varied architecture/interior images to create the masonry effect
  const galleryImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    "https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 pt-12 opacity-0 animate-text-reveal">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#2C3539] mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#2C3539]">Gallery</h1>
          <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">A visual journey through our diverse architectural creations.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 pb-16 space-y-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="break-inside-avoid relative overflow-hidden rounded shadow-md group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#2C3539]/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-heading font-semibold tracking-widest uppercase border border-white px-6 py-2 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
