import { MapPin, Bath, Bed, Ruler } from "lucide-react";
type Slide = {
  image: string;
  status: string;
  price: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
};
const ProjectCard = ({ slide }: { slide: Slide })  => {
  const {
    image,
    status,
    price,
    title,
    location,
    beds,
    baths,
    area,
  } = slide;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-sm mx-auto mb-16">
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      <div className="p-4">
        {/* Status and Price */}
        <div className="flex justify-between items-center mb-2">
          <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {status}
          </span>
          <span className="text-blue-700 font-bold text-sm">
            ${price.toLocaleString()}/
            <span className="text-gray-500 font-normal">month</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>

        {/* Location */}
        <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
          <MapPin size={14} /> {location}
        </p>

        {/* Features */}
        <div className="grid grid-cols-3 text-center text-sm text-gray-700 border-t pt-3">
          <div className="flex items-center justify-center gap-1">
            <Bed size={16} /> {beds}
          </div>
          <div className="flex items-center justify-center gap-1">
            <Bath size={16} /> {baths}
          </div>
          <div className="flex items-center justify-center gap-1">
            <Ruler size={16} /> {area} sqft
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
