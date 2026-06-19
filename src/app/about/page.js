import './about.css';

export const metadata = {
  title: 'About | Planedge Architect',
  description: 'Learn about Planedge Architect, our Indian heritage, and our innovative design philosophy.',
};

export default function About() {
  return (
    <div className="about-page section-padding">
      <div className="container">
        <div className="about-header text-center mb-lg mt-lg animate-fade-in">
          <h1>Our Story</h1>
          <p>Rooted in India, Designing for the World.</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Planedge Office" />
          </div>
          <div className="about-text">
            <h2>The Planedge Philosophy</h2>
            <p>Founded in Ranchi, Jharkhand, Planedge Architect emerged from a deep appreciation for India's rich architectural heritage and a desire to merge it with contemporary, sustainable design principles.</p>
            <p>Our philosophy centers around creating spaces that are not only visually stunning but also deeply connected to their environment and the people who inhabit them. We believe in an 'Indian Soul'—an essence that brings warmth, community, and intricate detailing to modern minimalism.</p>
            
            <div className="stats mt-md">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Design Awards</span>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section mt-lg">
          <div className="section-header text-center mb-md">
            <h2>Our Leadership</h2>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image placeholder-image" style={{ background: 'url(https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80) center/cover' }}></div>
              <h3>Rajiv Sharma</h3>
              <p>Principal Architect</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder-image" style={{ background: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80) center/cover' }}></div>
              <h3>Anita Desai</h3>
              <p>Head of Interior Design</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder-image" style={{ background: 'url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80) center/cover' }}></div>
              <h3>Vikram Singh</h3>
              <p>Urban Planner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
