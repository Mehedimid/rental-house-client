/* eslint-disable @next/next/no-img-element */

import { FaBed, FaBath, FaMapMarkerAlt, FaRulerCombined } from "react-icons/fa";
import PrimaryButton from "../shared/PrimaryButton";
interface PropertyCardProps {
  imageSrc: string;
  forRent?: boolean;
  forSale?: boolean;
  price: string;
  title: string;
  address: string;
  beds?: number;
  baths?: number;
  sqft?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageSrc,
  forRent,
  price,
  title,
  address,
  beds,
  baths,
  sqft,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <img src={imageSrc} alt={title} />
        <div className="absolute top-2 left-2">
          {forRent && (
            <span className="inline-block bg-secondary text-white text-xs font-semibold rounded-md px-4 py-2 mr-2">
              For Rent
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          <FaMapMarkerAlt className="inline-block mr-1" /> {address}
        </p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-primary">{price}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          {beds !== undefined && (
            <div className="mr-4">
              <FaBed className="inline-block mr-1" /> {beds} Beds
            </div>
          )}
          {baths !== undefined && (
            <div className="mr-4">
              <FaBath className="inline-block mr-1" /> {baths} Baths
            </div>
          )}
          {sqft !== undefined && (
            <div>
              <FaRulerCombined className="inline-block mr-1" /> {sqft} sqft
            </div>
          )}
        </div>
        <div className="mt-4">
          <div>
            <PrimaryButton customClass="w-full">View Details</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
