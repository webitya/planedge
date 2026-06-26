import Image from 'next/image';

const ProjectCard = ({ title, location, year, image, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      <div className="p-4 sm:p-5 relative">
        <h3 className="font-heading text-lg font-bold text-[#2C3539] mb-1.5 line-clamp-1">{title}</h3>
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">
          <span>{location}</span>
          <span>{year}</span>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2 text-sm">{description}</p>
        <button className="inline-block px-4 py-2 font-heading font-semibold text-[10px] uppercase tracking-wider rounded border-2 border-[#2C3539] text-[#2C3539] transition-colors duration-300 hover:bg-[#2C3539] hover:text-white">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
