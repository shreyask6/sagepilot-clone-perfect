import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [scrollState, setScrollState] = useState(0); // 0: initial, 1: scrolled, 2: deep-scrolled
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Update scroll state based on thresholds
          if (scrollY <= 40) {
            setScrollState(0); // Initial/top state - normal header
          } else if (scrollY <= 160) {
            setScrollState(1); // First transition (100vw → 75%)
          } else {
            setScrollState(2); // Deep scroll (75% → 60%)
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Header is always visible

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop: Floating Tablet Header */}
      <header
        id="siteHeader"
        className={`site-header is-visible hidden md:block`}
        data-scroll-state={scrollState}
      >
        <div className="nav-pill">
          <a href="#" className="brand">
            Builder<span className="accent">Ops</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, '#services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleSmoothScroll(e, '#work')}
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#contact"
            className="cta"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            📞 Book a Call
          </a>
        </div>
      </header>

      {/* Mobile/Tablet: Regular Header with Burger Menu */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-1">
              <span className="text-lg sm:text-xl font-bold text-gray-900">Builder</span>
              <span className="text-lg sm:text-xl font-bold text-sage-green">Ops</span>
            </a>

            {/* Mobile menu button - Animated burger */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Animated slide-down */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-200/20 bg-white/95 backdrop-blur-md">
            <div className={`container mx-auto px-4 py-4 space-y-3 transform transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, '#services')}
                className="block py-2 text-gray-600 hover:text-sage-green transition-colors font-medium transform hover:translate-x-2 duration-200"
              >
                Services
              </a>
              <a
                href="#work"
                onClick={(e) => handleSmoothScroll(e, '#work')}
                className="block py-2 text-gray-600 hover:text-sage-green transition-colors font-medium transform hover:translate-x-2 duration-200"
              >
                Our Work
              </a>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="block py-2 text-gray-600 hover:text-sage-green transition-colors font-medium transform hover:translate-x-2 duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="block py-2 text-gray-600 hover:text-sage-green transition-colors font-medium transform hover:translate-x-2 duration-200"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="block w-full text-center py-3 mt-4 bg-sage-green/10 text-sage-green-dark border border-sage-green/25 rounded-lg font-medium hover:bg-sage-green/20 transition-all duration-200 hover:scale-105"
              >
                📞 Book a Call
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};