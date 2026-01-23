"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail, Calendar } from "lucide-react";
import { DemoScheduleModal } from "./DemoScheduleModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border-b border-white/10 py-1"
          : "bg-transparent py-2"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 z-10 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/apexaflow-logo.png" 
              alt="Apexa Flow" 
              className="h-12 md:h-16 w-auto object-contain bg-transparent relative z-10"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            
              href="tel:+12409071427"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(240) 907-1427</span>
            </a>
            
              href="mailto:contact@apexaflow.com"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <Button
              size="sm"
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Demo
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(10,10,15,0.98)] backdrop-blur-xl border-b border-white/10 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                
                  href="tel:+12409071427"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(240) 907-1427</span>
                </a>
                
                  href="mailto:contact@apexaflow.com"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@apexaflow.com</span>
                </a>
                <Button
                  size="sm"
                  onClick={() => {
                    setIsDemoModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 w-full mt-2"
                >
                  <span className="flex items-center gap-2 justify-center">
                    <Calendar className="w-4 h-4" />
                    Schedule Demo
                  </span>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>

      {/* Demo Schedule Modal */}
      <DemoScheduleModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </motion.header>
  );
}
