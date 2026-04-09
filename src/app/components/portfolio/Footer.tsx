import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "https://github.com/lol90a", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/%F0%9F%A6%80ali-adel%F0%9F%A6%80-515688371/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:aliadel90906@gmail.com", label: "Email" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-purple-500/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
              Ali Adel
            </h3>
            <p className="text-gray-400 text-sm">
              Senior Rust & Blockchain Developer crafting the future of Web3
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-gray-300">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ali Adel. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
