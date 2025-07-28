import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, CheckCircle } from "lucide-react";

interface Professional {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  rate: string;
  availability: string;
  verified: boolean;
  specialties: string[];
}

interface ProfessionalCardProps {
  professional: Professional;
}

const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border group">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img 
            src={professional.image} 
            alt={professional.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {professional.verified && (
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
              <CheckCircle className="h-3 w-3 text-primary-foreground" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg text-card-foreground">{professional.name}</h3>
            {professional.verified && (
              <Badge variant="secondary" className="text-xs">Verified</Badge>
            )}
          </div>
          <p className="text-muted-foreground text-sm">{professional.title}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-medium text-sm">{professional.rating}</span>
            </div>
            <span className="text-muted-foreground text-xs">({professional.reviews} reviews)</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-bold text-card-foreground">{professional.rate}</div>
          <div className="text-xs text-muted-foreground">per hour</div>
        </div>
      </div>
      
      {/* Details */}
      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          <span>{professional.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{professional.availability}</span>
        </div>
      </div>
      
      {/* Specialties */}
      <div className="flex flex-wrap gap-2 mb-4">
        {professional.specialties.map((specialty, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {specialty}
          </Badge>
        ))}
      </div>
      
      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          View Profile
        </Button>
        <Button variant="premium" size="sm" className="flex-1">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ProfessionalCard;