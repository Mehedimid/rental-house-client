"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/rental.png";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export const Navbar = () => {
  const pathname = usePathname();
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when dropdown is open
  useEffect(() => {
    if (dropDownState) {
      document.body.style.overflow = "hidden";
      const scrollBtn = document.querySelector("button.scroll-to-top") as HTMLElement;
      if (scrollBtn) scrollBtn.style.display = "none";
    } else {
      document.body.style.overflow = "auto";
      const scrollBtn = document.querySelector("button.scroll-to-top") as HTMLElement;
      if (scrollBtn) scrollBtn.style.display = "flex";
    }

    return () => {
      document.body.style.overflow = "auto";
      const scrollBtn = document.querySelector("button.scroll-to-top") as HTMLElement;
      if (scrollBtn) scrollBtn.style.display = "flex";
    };
  }, [dropDownState]);

  const navbarStyles: React.CSSProperties = {
    "--dropText-color": "#414956",
    "--dropBg-color": "#876ff6",
  } as React.CSSProperties;

  const menuItems = ["Home", "About Us", "Listings", "FAQ", "Contact"];

  const getPath = (item: string) => (item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`);

  return (
    <nav
      className={`section-padding-x fixed md:fixed lg:absolute z-30 w-full flex items-center justify-between bg-[#b2b2f1] py-0 lg:container px-3  text-white left-1/2 transform -translate-x-1/2 ${
        scrolled ? "md:bg-[#b2b2f1] md:py-2" : "bg-transparent"
      }`}
      style={navbarStyles}
    >
      {/* Logo */}
      <div className="scale-100 cursor-pointer rounded-2xl lg:px-3 lg:py-0 py-2 text-xl font-semibold text-white transition-all duration-200">
        <Link href="/" className={`flex items-center  lg:flex ${dropDownState ? "md:hidden" : ""}`}>
          <Image src={logo} alt="logo" width={72} height={42}  className="font-bold"/>
          <p className="text-2xl lg:text-3xl font-bold lg:font-extrabold text-primary ">
            Rental<span className="text-secondary">House</span>
          </p>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden items-center justify-between gap-10 md:gap-5 lg:gap-10 font-semibold lg:flex">
        {menuItems.slice(0, 4).map((item) => {
          const slug = getPath(item);
          const isActive = pathname === slug;
          return (
            <li
              key={item}
              className={`group flex cursor-pointer flex-col py-6 relative transition-all duration-300 hover:text-secondary ${
                isActive ? "text-secondary" : "text-primary"
              }`}
            >
              <Link href={slug}>{item}</Link>
            </li>
          );
        })}
        <PrimaryButton customClass="text-base font-semibold" path="/login">
          Login
        </PrimaryButton>
        <SecondaryButton customClass="text-base font-semibold" path="/register">
          Sign up
        </SecondaryButton>
      </ul>

      {/* Mobile Hamburger */}
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer text-primary"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>

        {/* Dropdown Mobile Menu */}
        {dropDownState && (
          <ul className="z-10 -mt-6 gap-2 bg-white absolute right-[-40px] top-[-20px] flex min-w-[calc(108vw-1px)] md:min-w-[calc(65vw-1px)] min-h-[110vh] flex-col pt-6 md:pt-10 rounded-b-xl transition-all duration-300 ease-in-out">
            {/* Close Button */}
            <Link href="/" className="flex  pl-4 item-center">
              <Image src="/rental.png" alt="logo"  width={72} height={56} />
              <p className="text-2xl md:text-3xl font-bold lg:font-extrabold text-primary mt-5">
                Rental<span className="text-secondary">House</span>
              </p>
            </Link>

            <button
              onClick={() => setDropDownState(false)}
              className="absolute top-4 md:right-6 right-3 mr-5 md:mr-0 md:mt-10 text-AppPopColor bg-[var(--dropBg-color)] hover:text-white hover:bg-AppPopColor text-3xl border rounded-full py-1 px-3 cursor-pointer transition-all duration-300 mt-6"
            >
              &times;
            </button>

            {/* Mobile Menu Links */}
            {menuItems.map((item) => {
              const slug = getPath(item);
              const isActive = pathname === slug;
              return (
                <Link
                  key={item}
                  href={slug}
                  className={`cursor-pointer px-12 py-3 transition-all duration-500 ease-in-out font-semibold hover:bg-[var(--dropBg-color)] ${
                    isActive ? "text-secondary" : "text-primary"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
