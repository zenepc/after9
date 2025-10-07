import { Button } from "@/components/ui/button";
import { Search, Star, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-bartender.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional bartender" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Elite Entertainment Professionals
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
          Connect with top-tier bartenders, DJs, and event staff for your next celebration. 
          Vetted professionals, guaranteed excellence.
        </p>
        
        {/* Search Bar */}
        <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-card mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input 
                placeholder="Search for bartenders, DJs, event staff..."
                className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
            <Link to="/browse" className="md:w-auto w-full">
              <Button variant="premium" size="lg" className="w-full">
                Find Professionals
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-muted-foreground">Verified Pros</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-accent/20 rounded-lg">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">4.9</div>
              <div className="text-muted-foreground">Avg Rating</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">10k+</div>
              <div className="text-muted-foreground">Events Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;