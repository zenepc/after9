import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState } from "react";

const mockProfiles = [
  {
    id: "1",
    name: "Sarah Martinez",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    categories: ["Bartender", "Mixologist"],
  },
  {
    id: "2",
    name: "DJ Marcus",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    categories: ["DJ", "Music Producer"],
  },
  {
    id: "3",
    name: "Emily Chen",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
    rating: 4.7,
    categories: ["Event Server", "Host"],
  },
  {
    id: "4",
    name: "Alex Rodriguez",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    categories: ["Bartender", "Event Consultant"],
  },
  {
    id: "5",
    name: "Luna Williams",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=300&fit=crop&crop=face",
    rating: 4.6,
    categories: ["DJ", "MC"],
  },
  {
    id: "6",
    name: "James Thompson",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    categories: ["Server", "Team Lead"],
  },
];

const Browse = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Browse Professionals
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover and rate the best entertainment professionals
            </p>
          </div>
          
          {/* Category Filter Section */}
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProfiles.map((profile) => (
              <div key={profile.id} className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border group">
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                
                {/* Name */}
                <h3 className="font-semibold text-lg text-card-foreground text-center mb-3">
                  {profile.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium text-sm">{profile.rating}</span>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2">
                  {profile.categories.map((category, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;