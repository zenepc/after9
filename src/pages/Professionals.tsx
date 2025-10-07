import { useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import SearchFilters from "@/components/SearchFilters";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import bartender1 from "@/assets/bartender-1.jpg";
import dj1 from "@/assets/dj-1.jpg";
import server1 from "@/assets/server-1.jpg";

const mockProfessionals = [
  {
    id: "1",
    name: "Kokain Emre",
    title: "Premium Cocktail Specialist",
    image: bartender1,
    rating: 4.9,
    reviews: 127,
    location: "New York, NY",
    rate: "$85",
    availability: "Available Today",
    verified: true,
    specialties: ["Craft Cocktails", "Wine Service", "Flair Bartending"],
  },
  {
    id: "2",
    name: "Betül",
    title: "Event DJ & Music Producer",
    image: dj1,
    rating: 4.8,
    reviews: 89,
    location: "Los Angeles, CA",
    rate: "$120",
    availability: "Next Week",
    verified: true,
    specialties: ["Wedding DJ", "Corporate Events", "Club Mixing"],
  },
  {
    id: "3",
    name: "Emily Chen",
    title: "Professional Event Server",
    image: server1,
    rating: 4.7,
    reviews: 156,
    location: "Chicago, IL",
    rate: "$45",
    availability: "Available Today",
    verified: false,
    specialties: ["Fine Dining", "Corporate Events", "Private Parties"],
  },
  {
    id: "4",
    name: "Alex Rodriguez",
    title: "Mixology Expert",
    image: bartender1,
    rating: 4.9,
    reviews: 203,
    location: "Miami, FL",
    rate: "$95",
    availability: "Tomorrow",
    verified: true,
    specialties: ["Molecular Mixology", "Tequila Specialist", "Event Consulting"],
  },
  {
    id: "5",
    name: "Luna Williams",
    title: "Mobile DJ & MC",
    image: dj1,
    rating: 4.6,
    reviews: 67,
    location: "Las Vegas, NV",
    rate: "$150",
    availability: "This Weekend",
    verified: true,
    specialties: ["Wedding MC", "Party DJ", "Sound Equipment"],
  },
  {
    id: "6",
    name: "James Thompson",
    title: "Banquet Server Lead",
    image: server1,
    rating: 4.8,
    reviews: 92,
    location: "New York, NY",
    rate: "$55",
    availability: "Available Today",
    verified: true,
    specialties: ["Team Leadership", "VIP Service", "Event Coordination"],
  },
];

const Professionals = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProfessionals, setFilteredProfessionals] = useState(mockProfessionals);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Filter logic would go here
  };

  const handleLocationChange = (location: string) => {
    // Filter by location logic
  };

  const handlePriceRangeChange = (range: string) => {
    // Filter by price range logic
  };

  const handleRatingChange = (rating: string) => {
    // Filter by rating logic
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Find Your Perfect Professional
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our curated selection of verified entertainment and hospitality professionals
            </p>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          <SearchFilters
            onLocationChange={handleLocationChange}
            onPriceRangeChange={handlePriceRangeChange}
            onRatingChange={handleRatingChange}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-3 rounded-lg font-medium transition-colors">
              Load More Professionals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;