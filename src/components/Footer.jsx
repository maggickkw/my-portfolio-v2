import React from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaDiscord } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/wilberforce-sedem-haibor-59210120b/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/maggickkw",
    label: "GitHub",
  },
  {
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send?phone=233245910775",
    label: "WhatsApp",
  },
  {
    icon: FaDiscord,
    href: "https://discordapp.com/channels/@me/wmaggickk/",
    label: "Discord",
  },
];

function Footer() {
  return (
    <footer className="border-t border-base-800/30">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <span className="font-display text-lg font-semibold text-white hover:text-accent transition-colors">
                MAGGICK
              </span>
            </Link>
            <p className="text-base-500 text-xs mt-1">
              Crafted by Wilberforce Haibor
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="text-base-500 hover:text-accent transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="project"
              smooth={true}
              offset={-80}
              duration={500}
              className="text-base-500 hover:text-accent transition-colors cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="text-base-500 hover:text-accent transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base-500 hover:text-accent hover:bg-base-800/30 transition-all text-sm"
                  title={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <div className="w-px h-6 bg-base-800" />

            <Link
              to="home"
              smooth={true}
              duration={500}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-base-800/30 text-base-500 hover:text-accent transition-all cursor-pointer text-sm"
              title="Back to top"
            >
              <HiArrowUp />
            </Link>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-8 pt-6 border-t border-base-800/30 text-center">
          <p className="text-base-600 text-xs">
            © {new Date().getFullYear()} Wilberforce Sedem Haibor
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
