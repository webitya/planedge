import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects | Planedge Architect',
  description: 'Explore our portfolio of innovative architectural projects across India.',
};

export default function Projects() {
  const allProjects = [
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
    },
    {
      id: 4,
      title: 'Ojas Corporate Park',
      location: 'Jamshedpur, Jharkhand',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A state-of-the-art commercial complex featuring biophilic design and smart energy systems.'
    },
    {
      id: 5,
      title: 'Aura Boutique Hotel',
      location: 'Darjeeling, West Bengal',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A luxury retreat that harmonizes with the hilly terrain, offering panoramic views of the Himalayas.'
    },
    {
      id: 6,
      title: 'Kavya Cultural Center',
      location: 'Kolkata, West Bengal',
      year: '2025 (Upcoming)',
      image: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'An iconic civic building designed to celebrate local arts, featuring a contemporary interpretation of traditional terracotta facades.'
    }
  ];

  return (
    <div className="bg-gray-50 py-24 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 pt-12 opacity-0 animate-text-reveal">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#2C3539] mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#2C3539]">Our Portfolio</h1>
          <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">A curated selection of our finest architectural endeavors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {allProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
