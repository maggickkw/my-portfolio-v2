import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { number: "01", name: "About", to: "about" },
    { number: "02", name: "Projects", to: "project" },
    { number: "03", name: "Contact", to: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-base-950/85 backdrop-blur-lg shadow-lg shadow-base-950/50"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <span className="font-display text-lg font-bold text-accent hover:text-accent-light transition-colors duration-300">
              maggick.
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-link cursor-pointer"
              >
                <span className="text-accent font-mono text-xs">
                  {link.number}.
                </span>{" "}
                <span className="text-[13px]">{link.name}</span>
              </Link>
            ))}
            <a
              href="./Wilberforce_Sedem_Haibor.pdf"
              download={true}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              Resume
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-base-300 hover:text-accent transition-colors"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-base-950/95 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer text-center group"
            >
              <span className="block text-accent font-mono text-sm mb-1">
                {link.number}.
              </span>
              <span className="text-lg font-body text-base-200 group-hover:text-accent transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
          <a
            href="./Wilberforce_Sedem_Haibor.pdf"
            download={true}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
