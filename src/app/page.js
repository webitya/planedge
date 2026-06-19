import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import './home.css';

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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in">
          <h1>Crafting Spaces with an <br/><span>Indian Soul</span></h1>
          <p>Planedge Architect brings your vision to life through innovative, sustainable, and culturally rooted architectural design.</p>
          <div className="hero-buttons mt-md">
            <Link href="/projects" className="btn btn-primary">Our Portfolio</Link>
            <Link href="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects section-padding">
        <div className="container">
          <div className="section-header text-center mb-lg">
            <h2>Featured Projects</h2>
            <p>Discover our recent architectural masterpieces that blend modern aesthetics with Indian heritage.</p>
          </div>
          
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="text-center mt-lg">
            <Link href="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Collaborative Model Section */}
      <section className="collaborative-model section-padding">
        <div className="container model-container">
          <div className="model-image">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Architects collaborating" />
          </div>
          <div className="model-content">
            <h2>Collaborative Design Approach</h2>
            <p>At Planedge Architect, we believe that the best spaces are born from collaboration. We work closely with our clients to understand their needs, lifestyle, and aspirations, translating them into functional and beautiful architectural solutions.</p>
            <p>Our process is transparent, iterative, and focused on delivering exceptional quality from concept to completion.</p>
            <Link href="/about" className="btn btn-primary mt-sm">Learn About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
