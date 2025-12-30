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
    { name: "About", to: "about" },
    { name: "Projects", to: "project" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-base-950/90 backdrop-blur-md border-b border-base-800/30"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer group"
          >
            <span className="font-display text-xl md:text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
              MAGGICK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-link link-hover cursor-pointer text-sm tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="./Wilberforce_Sedem_Haibor.pdf"
              download={true}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-base-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-base-950/98 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-medium text-base-200 hover:text-accent transition-colors cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
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
