
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Eksplorasi', path: '/explore' },
    { name: 'Kategori', path: '/categories' },
    { name: 'Perpustakaan', path: '/library' },
    { name: 'Tentang', path: '/about' },
  ];
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-batik to-batik-dark">LENTERA</span>
            </Link>
          </div>
          
          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isOpen ? <X /> : <Menu />}
              </Button>
              
              {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-md animate-fade-in">
                  <nav className="container mx-auto py-4">
                    <ul className="space-y-2">
                      {navLinks.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className={cn(
                              "block py-2 px-4 hover:bg-muted rounded-md transition-colors",
                              location.pathname === link.path && "font-medium text-batik bg-batik-light/20"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link to="/login">
                          <Button className="w-full mt-2">
                            Masuk
                          </Button>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-1">
              <nav>
                <ul className="flex space-x-1">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={cn(
                          "px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors",
                          location.pathname === link.path && "text-batik bg-batik-light/20"
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link to="/login">
                <Button>
                  Masuk
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
