import Image from 'next/image';

const ProjectCard = ({ title, location, year, image, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      <div className="p-6 relative">
        <h3 className="font-heading text-2xl font-bold text-[#2C3539] mb-2">{title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
          <span>{location}</span>
          <span>{year}</span>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{description}</p>
        <button className="inline-block px-6 py-3 font-heading font-semibold text-sm uppercase tracking-wider rounded border-2 border-[#2C3539] text-[#2C3539] transition-colors duration-300 hover:bg-[#2C3539] hover:text-white">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
