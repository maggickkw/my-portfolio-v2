import React from "react";
import { Link } from "react-scroll";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa6";

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
    <footer className="py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-center gap-1 mb-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="inline-block cursor-pointer"
          >
            <p className="text-xs font-mono text-base-500 hover:text-accent transition-colors">
              Designed & Built by WILBERFORCE SEDEM HAIBOR
            </p>
          </Link>
          <p className="text-[11px] font-mono text-base-600 mt-2">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
