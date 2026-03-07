import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.to);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="cursor-pointer">
            <span className="text-xl md:text-2xl font-bold font-[family-name:var(--font-poppins)] text-primary dark:text-accent-light tracking-tight">
              {'<'}
              <span className="text-accent dark:text-accent-light">Prasad</span>
              {' />'}
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => scrollTo(link.to)}
                className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-lg hover:bg-accent/5 dark:hover:bg-accent-light/5 ${
                  activeSection === link.to
                    ? 'text-accent dark:text-accent-light'
                    : 'text-light-text dark:text-dark-text hover:text-accent dark:hover:text-accent-light'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2.5 rounded-xl bg-gray-light/50 dark:bg-dark-card text-light-text dark:text-dark-text hover:bg-accent/10 dark:hover:bg-accent-light/10 transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-light/50 dark:bg-dark-card text-light-text dark:text-dark-text cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-light-text dark:text-dark-text cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-lg border-t border-gray-light/20 dark:border-dark-card"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => {
                    scrollTo(link.to);
                    setMobileOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent/5 transition-colors cursor-pointer ${
                    activeSection === link.to
                      ? 'text-accent bg-accent/10'
                      : 'text-light-text dark:text-dark-text'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
