import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Search, BarChart3, Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Home", href: "/", icon: BarChart3 },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Search", href: "/search", icon: Search },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-mono font-bold text-xl"
              >
                NCO 2015
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t"
            >
              <div className="space-y-2">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">NCO 2015</h3>
              <p className="text-sm text-muted-foreground">
                National Classification of Occupations - 2015, aligned with ISCO-2008
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link></li>
                <li><Link to="/search" className="text-muted-foreground hover:text-foreground">Search</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 NCO 2015. Built with modern web technologies.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}