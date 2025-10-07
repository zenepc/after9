import { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import { ProfessionalCard } from "@/components/ProfessionalCard";

const professionals = [
  {
    id: "1",
    name: "Sarah Martinez",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 127,
    specialties: ["Bartender", "Mixologist"],
    category: "bartenders",
    bio: "Expert mixologist with 8+ years creating signature cocktails for luxury events and private parties."
  },
  {
    id: "2",
    name: "DJ Marcus",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 89,
    specialties: ["DJ", "Music Producer"],
    category: "djs",
    bio: "Professional DJ and producer specializing in electronic music, weddings, and corporate events."
  },
  {
    id: "3",
    name: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 4.7,
    reviewCount: 156,
    specialties: ["Event Server", "Host"],
    category: "event-staff",
    bio: "Experienced event coordinator and host, ensuring seamless service for high-end corporate functions."
  },
  {
    id: "4",
    name: "Alex Rodriguez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 203,
    specialties: ["Bartender", "Event Consultant"],
    category: "bartenders",
    bio: "Award-winning bartender and event consultant with expertise in craft cocktails and bar setup."
  },
  {
    id: "5",
    name: "Luna Williams",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 4.6,
    reviewCount: 74,
    specialties: ["DJ", "MC"],
    category: "djs",
    bio: "Versatile DJ and MC bringing energy to clubs, festivals, and private celebrations across genres."
  },
  {
    id: "6",
    name: "James Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 192,
    specialties: ["Server", "Team Lead"],
    category: "event-staff",
    bio: "Team leader with 10 years experience in fine dining and large-scale event service management."
  },
  {
    id: "7",
    name: "Sofia Garcia",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 145,
    specialties: ["Wedding Photographer", "Portrait"],
    category: "photographers",
    bio: "Creative photographer capturing beautiful moments at weddings and special events with artistic flair."
  },
  {
    id: "8",
    name: "Michael Park",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    rating: 4.7,
    reviewCount: 98,
    specialties: ["Event Host", "Emcee"],
    category: "event-hosts",
    bio: "Charismatic host and emcee making every event memorable with professional presentation skills."
  }
];

const BrowseProfessionals = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProfessionals = selectedCategory === "all" 
    ? professionals 
    : professionals.filter(prof => prof.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Browse Professionals
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and rate the best entertainment professionals
          </p>
        </div>

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfessionals.map((professional) => (
            <ProfessionalCard 
              key={professional.id} 
              professional={professional} 
            />
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No professionals found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseProfessionals;