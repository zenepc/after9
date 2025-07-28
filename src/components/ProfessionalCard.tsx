import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Professional {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  category: string;
  bio: string;
}

interface ProfessionalCardProps {
  professional: Professional;
}

export const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative">
      {/* Rating in top corner */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        <span className="text-xs font-medium text-foreground">
          {professional.rating}
        </span>
        <span className="text-xs text-muted-foreground">
          ({professional.reviewCount})
        </span>
      </div>

      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <img
            src={professional.avatar}
            alt={professional.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-300"
          />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            {professional.name}
          </h3>
          
          {/* Bio section */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {professional.bio}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {professional.specialties.map((specialty, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs px-3 py-1 bg-secondary/80 text-secondary-foreground"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}