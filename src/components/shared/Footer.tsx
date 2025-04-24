
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-primary">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-6 lg:w-4/5 mx-auto text-gray-300">
        
        {/* Services */}
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <h2 className="text-xl font-bold mb-4 text-white">Services</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-100 transition">Property Selling</li>
            <li className="hover:text-gray-100 transition">Property Buying</li>
            <li className="hover:text-gray-100 transition">Architectural</li>
            <li className="hover:text-gray-100 transition">Advising</li>
          </ul>
        </div>

        {/* Company */}
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        >
          <h2 className="text-xl font-bold mb-4 text-white">Company</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-100 transition">Contact: 01911309454</li>
            <li className="hover:text-gray-100 transition">About us: Rental House Ltd.</li>
            <li className="hover:text-gray-100 transition">Jobs: www.RentalHouse.com</li>
            <li className="hover:text-gray-100 transition">Press Kit</li>
          </ul>
        </div>

        {/* Legal */}
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-delay="600"
        >
          <h2 className="text-xl font-bold mb-4 text-white">Legal</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-100 transition">Terms of Use</li>
            <li className="hover:text-gray-100 transition">Privacy Policy</li>
            <li className="hover:text-gray-100 transition">Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center  gap-6 border-t  px-6 bg-gradient-to-r from-gray-300 via-[#0d2b77] to-primary text-gray-800 lg:w-4/5 mx-auto">
        <div className="flex items-center ">
          <Image src="/rental.png" alt="logo" width={82} height={56}/>
          <div>
            <h3 className="text-lg font-bold bg-primary text-transparent bg-clip-text">
              Rental <span className="text-secondary">House</span> Ltd.
            </h3>
            <p className="text-sm text-gray-30">Providing reliable source since 2025</p>
          </div>
        </div>

        <div className="flex gap-4 text-2xl">
          <a href="#" className="hover:text-3xl  text-sky-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-3xl  text-secondary transition"><IoLogoYoutube /></a>
          <a href="#" className="hover:text-3xl  text-blue-200 transition"><FaSquareFacebook /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
