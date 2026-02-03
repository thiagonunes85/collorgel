import { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_LINKS } from "@/lib/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Droplets className="w-8 h-8 text-cyan-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full mix-blend-multiply opacity-70" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-primary" : "text-primary"}`}>
            COLLOR<span className="text-cyan-500">GEL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {MENU_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-cyan-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-cyan-600 transition-all transform hover:scale-105"
          >
            Solicite um Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {MENU_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-cyan-500 text-white p-4 rounded-xl font-bold mt-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Solicite um Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
