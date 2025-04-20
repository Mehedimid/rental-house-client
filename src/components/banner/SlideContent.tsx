import Image from "next/image";

const SlideContent = ({ imageUrl }) => (
    <div className="relative w-full h-[700px]">
      <Image src={imageUrl} alt="Luxury House" fill className="rounded-xl object-cover" />
  
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Luxury House Renting</h1>
        <p className="text-white text-base md:text-lg lg:text-xl font-medium md:w-2/3 mb-8">
          Discover smart, secure, and affordable rental homes tailored to your needs. Whether you're a tenant or a landlord, we connect you with the best housing solutions in just a few clicks.
        </p>
  
          {/* Search Panel */}
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Location"
        className="input input-bordered w-full lg:w-1/3"
      />
      <select className="select select-bordered w-full lg:w-1/3">
        <option disabled selected>Price Range</option>
        <option>$500 - $1000</option>
        <option>$1000 - $2000</option>
      </select>
      <select className="select select-bordered w-full lg:w-1/3">
        <option disabled selected>Bed & Baths</option>
        <option>2 Bed / 1 Bath</option>
        <option>3 Bed / 2 Bath</option>
      </select>
      <button className="btn bg-red-600 text-white hover:bg-red-700 px-6">
        Search Property
      </button>
    </div>

    {/* Review Avatars */}
    <div className="flex items-center gap-4">
      <div className="flex -space-x-2">
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="avatar1"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/women/2.jpg"
          alt="avatar2"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="avatar3"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/women/4.jpg"
          alt="avatar4"
        />
      </div>
      <span className="text-white font-medium text-lg">29k+ Positive Reviews</span>
    </div>
      </div>
    </div>
  );

  export default SlideContent 