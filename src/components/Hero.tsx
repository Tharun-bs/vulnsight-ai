import { Button } from "@/components/ui/button";
import { Shield, Zap, Eye } from "lucide-react";
import heroImage from "@/assets/cyber-network-hero.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
      {/* Background Network Visualization */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 mb-8 animate-pulse-glow">
            <Shield className="w-5 h-5 text-cyber-blue" />
            <span className="text-sm font-medium text-cyber-blue">VulnSight-AI</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyber-blue via-primary to-cyber-green bg-clip-text text-transparent">
              Predictive
            </span>
            <br />
            <span className="text-foreground">Cyber-Cognition</span>
            <br />
            <span className="text-cyber-blue">Engine</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your cybersecurity from reactive firefighting to proactive threat prevention with AI-powered vulnerability forecasting and attack path prediction.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <Eye className="w-4 h-4 text-cyber-blue" />
              <span className="text-sm">Predictive Analytics</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <Zap className="w-4 h-4 text-cyber-green" />
              <span className="text-sm">Real-time Intelligence</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <Shield className="w-4 h-4 text-warning" />
              <span className="text-sm">Threat Forecasting</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg" className="text-lg px-8 py-6">
              Launch Dashboard
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Demo
            </Button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
            <div className="text-3xl font-bold text-cyber-blue mb-2">99.2%</div>
            <div className="text-sm text-muted-foreground">Threat Prediction Accuracy</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
            <div className="text-3xl font-bold text-cyber-green mb-2">48hrs</div>
            <div className="text-sm text-muted-foreground">Average Early Warning</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/50 border border-border">
            <div className="text-3xl font-bold text-warning mb-2">73%</div>
            <div className="text-sm text-muted-foreground">Reduction in Security Incidents</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;