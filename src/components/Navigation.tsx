import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/net-zero-logo.png';
import { AlignRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react';

const Navigation = () => {
  const location = useLocation();
  const [position, setPosition] = React.useState("bottom")
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    // { name: 'Blog', path: '/blog' },
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
                className={`text-sm font-medium transition-colors hover:text-solar-600 ${isActive(item.path)
                  ? 'text-solar-600 border-b-2 border-solar-600 pb-1'
                  : 'text-muted-foreground'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className='flex justify-items-end gap-2'>
            <Button variant="solar" size="sm" asChild>
              <Link to="/about/contact">Contact Us</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="solar" size="sm" className='block md:hidden lg:hidden'>
                  <AlignRight className='w-10' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                    >
                      <DropdownMenuRadioItem value={item.name}>{item.name}</DropdownMenuRadioItem>
                    </Link>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;