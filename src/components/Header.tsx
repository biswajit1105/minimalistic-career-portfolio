
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: 'About', href: '#about' },
  { title: 'Experience', href: '#experience' },
  { title: 'Education', href: '#education' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isMobile = useIsMobile();

  // Handle scroll events for nav highlights and header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Determine which section is in view
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-foreground animate-fade-in">
          John <span className="text-primary">Doe</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {link.title}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="btn-primary"
            download
          >
            <Download size={16} />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-t border-border shadow-md animate-fade-in py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg font-medium ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
                onClick={handleNavClick}
              >
                {link.title}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="btn-primary w-full flex justify-center mt-4"
              download
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
