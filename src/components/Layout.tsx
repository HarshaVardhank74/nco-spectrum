import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Search, BarChart3, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'About', href: '/about', icon: FileText },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Enhanced Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 glass-effect border-b"
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">NCO</span>
                </div>
                <span>2015</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted hover:scale-105 ${
                      location.pathname === item.href 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <item.icon className="inline w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t bg-background/95 backdrop-blur"
            >
              <div className="container-wide py-4">
                <div className="flex flex-col space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                          location.pathname === item.href 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Enhanced Footer */}
      <motion.footer 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="footer-gradient text-white"
      >
        <div className="container-wide py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">NCO</span>
                </div>
                <span className="font-bold text-lg">2015</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                National Classification of Occupations, aligned with ISCO-2008 standards.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/dashboard" className="text-white/80 hover:text-white text-sm transition-colors">Dashboard</Link></li>
                <li><Link to="/search" className="text-white/80 hover:text-white text-sm transition-colors">Search</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors">About</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><span className="text-white/80 text-sm">ISCO-2008 Alignment</span></li>
                <li><span className="text-white/80 text-sm">Classification Guide</span></li>
                <li><span className="text-white/80 text-sm">Data Standards</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <Link to="/contact" className="text-white/80 hover:text-white text-sm transition-colors block">
                  Get in Touch
                </Link>
                <p className="text-white/60 text-xs">
                  Demo platform for NCO 2015 structure
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 National Classification of Occupations. Demo implementation with mock data.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}