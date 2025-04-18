"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import SecondaryButton from "../shared/SecondaryButton";

interface FilterSectionProps {
  onFilterChange: (filters: Record<string, any>) => void;
}

const FilterBox: React.FC<FilterSectionProps> = ({ onFilterChange }) => {
  const [keywords, setKeywords] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortBy, setSortBy] = useState("");

  const handleKeywordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(event.target.value);
  };

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPropertyType(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    const isMin = event.target.name === "minPrice";
    setPriceRange(isMin ? [value, priceRange[1]] : [priceRange[0], value]);
  };

  const applyFilters = () => {
    const filters: Record<string, any> = {};
    if (keywords) filters.keywords = keywords;
    if (propertyType) filters.propertyType = propertyType;
    if (city) filters.city = city;
    if (priceRange[0] > 0 || priceRange[1] < 1000000) {
      filters.priceRange = priceRange;
    }
    if (sortBy) filters.sortBy = sortBy;

    onFilterChange(filters);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md sticky top-20">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Filter By Features
      </h2>

      {/* Keywords */}
      <div className="mb-3 lg:mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2"></label>
        <input
          type="text"
          className="shadow bg-gray-50 rounded w-full p-3 lg:p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Keywords"
          value={keywords}
          onChange={handleKeywordsChange}
        />
      </div>

      {/* Property Type */}
      <div className="mb-3 lg:mb-6">
        <select
          className="bg-gray-50 shadow rounded w-full p-3 lg:p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={propertyType}
          onChange={handlePropertyTypeChange}
        >
          <option value="" disabled>
            Filter by Property Type
          </option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="townhouse">Townhouse</option>
        </select>
      </div>

      {/* City */}
      <div className="mb-3 lg:mb-6">
        <select
          className="bg-gray-50 shadow rounded w-full p-3 lg:p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={city}
          onChange={handleCityChange}
        >
          <option value="" disabled>
            Filter by City
          </option>
          <option value="new-york">New York</option>
          <option value="london">London</option>
          <option value="paris">Paris</option>
          <option value="tokyo">Tokyo</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-3 lg:mb-6">
        <div className="flex items-center">
          <input
            type="number"
            className="bg-gray-50 shadow rounded w-1/2 p-3 lg:p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            placeholder="Min Price"
            name="minPrice"
            value={priceRange[0]}
            onChange={handlePriceRangeChange}
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            className="bg-gray-50 shadow rounded w-1/2 p-3 lg:p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Max Price"
            name="maxPrice"
            value={priceRange[1]}
            onChange={handlePriceRangeChange}
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <select
          className="bg-gray-50 shadow rounded w-full p-3 lg:p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="" disabled>
            Select Sorting
          </option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      <div className="flex justify-center items-center">
        <button type="button" onClick={applyFilters}>
          <SecondaryButton customClass="w-full">
            {" "}
            Filter By Features
          </SecondaryButton>
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
