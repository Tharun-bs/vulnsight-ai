import { Button } from "@/components/ui/button";
import { Shield, Menu, Upload, BarChart3, Network } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
              VulnSight-AI
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#dashboard" className="text-foreground hover:text-cyber-blue transition-colors flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </a>
            <a href="#network" className="text-foreground hover:text-cyber-blue transition-colors flex items-center gap-2">
              <Network className="w-4 h-4" />
              Threat Map
            </a>
            <a href="#upload" className="text-foreground hover:text-cyber-blue transition-colors flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Data Upload
            </a>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="cyber" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;