import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/net-zero-logo.png';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                src={Logo}
                alt="Net Zero"
                className="max-w-sm w-full  "
            />
            </div>
            <div>
              <span className="font-bold text-lg text-foreground">Net Zero</span>
              <div className="text-xs text-solar-600">TECHNOLOGIES</div>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-solar-600 ${
                  isActive(item.path)
                    ? 'text-solar-600 border-b-2 border-solar-600 pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Button variant="solar" size="sm" asChild>
            <Link to="/about/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;