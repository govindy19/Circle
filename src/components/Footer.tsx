import logo from "../assets/svgs/logo.svg";
import logo_copyright from "../assets/svgs/logo-copyright.svg";
import ico_soc from "../assets/svgs/ico_soc-01.svg";
import ico_soc2 from "../assets/svgs/ico_soc-02.svg";
import ico_soc3 from "../assets/svgs/ico_soc-03.svg";
import ico_soc4 from "../assets/svgs/ico_soc-04.svg";
import ico_soc5 from "../assets/svgs/ico_soc-05.svg";

const Footer = () => {
  return (
    <footer className="bg-[#fdf4ea] text-gray-800 pt-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1310px] mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-14">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <img src={logo} alt="Logo" className="w-auto h-10" />
          </a>

          {/* Navigation and Contacts */}
          <div className="flex flex-col sm:flex-row sm:items-start text-center sm:text-left gap-10">
            {/* Nav Links */}
            <ul className="flex flex-col gap-2 text-sm uppercase tracking-widest">
              {["About", "Program", "Courses", "Reviews"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-black transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="hidden sm:block w-px bg-gray-300 h-20 mx-6" />

            {/* Contacts */}
            <ul className="text-sm tracking-widest text-gray-600 space-y-2">
              <li>
                <a
                  href="http://www.halo-lab.com"
                  className="hover:text-black transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.halo-lab.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:mail@halo-lab.com"
                  className="hover:text-black transition"
                >
                  mail@halo-lab.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+380962722100"
                  className="hover:text-black transition"
                >
                  +38 096 272 2100
                </a>
              </li>
              <li>Ukraine, Odessa</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <img src={logo_copyright} alt="Copyright" className="h-4" />
            <span>2021 Halo Lab. All rights reserved</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {[ico_soc, ico_soc2, ico_soc3, ico_soc4, ico_soc5].map(
              (icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-black/20 hover:bg-[#3C8AAC] "
                >
                  <img
                    src={icon}
                    alt="Social"
                    className="w-4 h-4 filter invert-[60%]"
                  />
                </a>
              )
            )}
          </div>
        </div>

        {/* Like & Follow row */}
        <div className="mt-10 pt-4 border-t border-black/10 text-sm text-gray-600 text-center">
          <div className="flex justify-center items-center gap-1 relative">
            <span className="w-6 h-6 bg-[url('/assets/svgs/heart.svg')] bg-no-repeat bg-center bg-contain filter saturate-[65%] brightness-[65%] hue-rotate-[140deg]" />
            <a
              href="https://webflow.com/website/Sircle-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Like
            </a>
            <span>&</span>
            <a
              href="https://webflow.com/halolab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Follow
            </a>
            <span>from you. New free to use projects from us.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;