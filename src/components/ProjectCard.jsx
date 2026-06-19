import Image from 'next/image';
import './ProjectCard.css';

const ProjectCard = ({ title, location, year, image, description }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {/* Placeholder for actual image */}
        <div className="placeholder-image" style={{ background: `url(${image}) center/cover no-repeat` }}></div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-meta">
          <span className="project-location">{location}</span>
          <span className="project-year">{year}</span>
        </div>
        <p className="project-description">{description}</p>
        <button className="btn btn-outline">View Project</button>
      </div>
    </div>
  );
};

export default ProjectCard;
