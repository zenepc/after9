import { Button } from "@/components/ui/button";
import { Wine, Music, Users, Utensils, Camera, Mic } from "lucide-react";

const categories = [
  { id: "all", name: "All Professionals", icon: Users },
  { id: "bartenders", name: "Bartenders", icon: Wine },
  { id: "djs", name: "DJs", icon: Music },
  { id: "event-staff", name: "Event Staff", icon: Utensils },
  { id: "photographers", name: "Photographers", icon: Camera },
  { id: "event-hosts", name: "Event Hosts", icon: Mic },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant={isSelected ? "premium" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className="flex items-center gap-2"
          >
            <Icon className="h-4 w-4" />
            {category.name}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;