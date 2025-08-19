import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
        </div>
        
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-3">
          <Link 
            to="/" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </Link>
          
          <div className="text-sm text-muted-foreground">
            <p>Or try one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link to="/dashboard" className="hover:text-foreground underline">Dashboard</Link>
              <Link to="/search" className="hover:text-foreground underline">Search</Link>
              <Link to="/about" className="hover:text-foreground underline">About</Link>
              <Link to="/contact" className="hover:text-foreground underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
