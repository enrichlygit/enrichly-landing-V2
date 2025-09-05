import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Benefits", id: "benefits" },
    { label: "Process", id: "process" },
    { label: "Proof", id: "proof" },
    { label: "Get Started", id: "intake" }
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-enrichly-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className={`font-semibold text-lg transition-colors ${
                isScrolled ? "text-enrichly-navy" : "text-white"
              }`}>
                Enrichly
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-enrichly-teal ${
                    isScrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("intake")}
                className="bg-enrichly-teal hover:bg-enrichly-teal/90 text-white px-6"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-enrichly-teal font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-enrichly-navy hover:bg-enrichly-navy/90 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}