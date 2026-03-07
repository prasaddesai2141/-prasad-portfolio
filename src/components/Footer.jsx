import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const socialLinks = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/prasad', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/prasad', label: 'LinkedIn' },
  { icon: <HiMail size={18} />, href: 'mailto:prasad@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-light-card dark:bg-dark-card/50 border-t border-gray-light/30 dark:border-dark-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-lg font-bold font-[family-name:var(--font-poppins)] text-primary dark:text-accent-light tracking-tight">
            {'<'}
            <span className="text-accent dark:text-accent-light">Prasad</span>
            {' />'}
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-xl text-gray-medium hover:text-accent dark:hover:text-accent-light hover:bg-accent/10 dark:hover:bg-accent-light/10 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-medium flex items-center gap-1">
            © {new Date().getFullYear()} Prasad. Made with{' '}
            <FaHeart className="text-red-500" size={12} /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
