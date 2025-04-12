import Logo from "../assets/svgs/logo.svg";
import Search from "../assets/svgs/search.svg";
import Hero from "../assets/svgs/heronew.svg";
import Ball1 from "../assets/svgs/ball.svg";
import plan from "../assets/svgs/plane.svg";
import Client1 from "../assets/svgs/client1.svg";
import Client2 from "../assets/svgs/client2.svg";
import Client3 from "../assets/svgs/client3.svg";
import Client4 from "../assets/svgs/client4.svg";
import Ball2 from "../assets/svgs/ball2.svg";
//import Background from "../assets/svgs/background.svg";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "About" },
    { href: "#program", label: "Program" },
    { href: "#course", label: "Courses" },
    { href: "#reviews", label: "Reviews" },
  ];
  const data = [
    {
      count: "200+",
      desc: "Ideal courses to sell physical and digital products from your site on WordPress.com",
    },
    {
      count: "150+",
      desc: "Experts share their knowledge on building and growing a web presence.",
    },
    {
      count: "10k+",
      desc: "Small businesses and online stores call WordPress.com home. No code, no complexities.",
    },
  ];
  return (
    <div className=" one w-full min-h-screen  bg-[url('https://assets.website-files.com/61e57244c283e5456130c457/61e5b01707b14538b566ef9e_bg_hero.svg')] bg-fixed  bg-cover bg-top top-0  "
    
    >
      <div className="relative">
        <div className="w-full">
          <div className="relative">
            <header className="w-full py-6 relative bg-transparent">
              <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center relative">
                  {/* Logo */}
                  <a href="/" className="block">
                    <img src={Logo} alt="logo" className="w-28" />
                  </a>

                  {/* Desktop Nav */}
                  <div className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="relative text-white text-lg transition duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {/* Right Side (Search, Sign In, Hamburger) */}
                  <div className="flex items-center space-x-4">
                    <img src={Search} alt="search" className="w-5 h-5" />
                    <a
                      href="#"
                      className="  inline-block px-10 py-4 bg-white text-black font-semibold text-lg rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out"
                    >
                      Sign In
                    </a>

                    {/* Hamburger Icon (Mobile Only) */}
                    <div
                      className="flex flex-col justify-between w-6 h-5 cursor-pointer md:hidden"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <span className="block h-0.5 bg-black"></span>
                      <span className="block h-0.5 bg-black"></span>
                      <span className="block h-0.5 bg-black"></span>
                    </div>
                  </div>
                </div>

                {/* Mobile Nav Menu */}
                {menuOpen && (
                  <div className="absolute top-full left-0 w-full bg-[#1689A2] shadow-md md:hidden z-50">
                    <div className="flex flex-col items-center space-y-4 py-6">
                      {navLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="text-white text-lg font-medium hover:text-[#e8ccbb] transition"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </header>

            <section id="hero" className="relative pb-20 ">
              <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="space-y-6 text-white">
                  <Parallax speed={5}>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl leading-tight">
                      Your next big <br />
                      <span className="block">idea starts here</span>
                    </h1>
                    <p className="text-lg text-whi">
                      The ideal framework to learn how to <br />
                      manage all aspects of startup.
                    </p>
                  </Parallax>
                  <a
                    href="#"
                    className="bttn_txt-wrap inline-block px-10 py-4 bg-[#e8ccbb] hover:bg-white text-black font-semibold text-lg rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out"
                  >
                    START FOR FREE
                  </a>
                </div>

                <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
                  <Parallax speed={10}>
                    <img src={Hero} alt="hero" className="w-full" />
                    <img
                      src={Ball1}
                      alt="Ball"
                      className="md:w-12 w-7 absolute top-8 md:left-34 left-20 animate-bounce"
                    />
                    <img
                      src={plan}
                      alt="plan"
                      className="md:w-12 w-7 absolute top-20 md:right-16 right-10 fly-animation"
                    />
                  </Parallax>
                </div>
              </div>

              <div className="mt-20">
                <div className="flex overflow-x-auto md:overflow-x-hidden flex-nowrap md:flex-wrap gap-8 md:gap-16 justify-start md:justify-center">
                  {[Client1, Client2, Client3, Client4].map((client, index) => (
                    <div
                      key={index}
                      className="min-w-[14rem] md:w-56 h-20 flex items-center justify-center flex-shrink-0"
                    >
                      <img
                        src={client}
                        alt={`client${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Slider */}
              <Parallax speed={20}>
                <div className="mt-20 bg-[#f8efe5] rounded-[3rem] px-6 py-12 shadow-inner max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {data.map((item, i) => (
                      <div
                        key={i}
                        className="relative flex flex-col items-center px-4"
                      >
                        {/* Number + Background Circle */}
                        <div className="relative mb-6">
                          <img
                            src={Ball2}
                            alt="count bg"
                            className="w-24 md:w-28 relative z-0"
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-black z-10 text-black">
                            {item.count}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[#4b4b4b] text-sm md:text-base leading-relaxed max-w-xs">
                          {item.desc}
                        </p>

                        {/* Divider between items (desktop only) */}
                        {i !== data.length - 1 && (
                          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-24 border-r border-dashed border-gray-400"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Parallax>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
