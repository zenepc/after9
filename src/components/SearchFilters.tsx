import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, DollarSign, Star, SlidersHorizontal } from "lucide-react";

interface SearchFiltersProps {
  onLocationChange: (location: string) => void;
  onPriceRangeChange: (range: string) => void;
  onRatingChange: (rating: string) => void;
}

const SearchFilters = ({ onLocationChange, onPriceRangeChange, onRatingChange }: SearchFiltersProps) => {
  return (
    <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border mb-8">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">Filters</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </label>
          <Select onValueChange={onLocationChange}>
            <SelectTrigger>
              <SelectValue placeholder="Any location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any location</SelectItem>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
              <SelectItem value="las-vegas">Las Vegas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Price Range
          </label>
          <Select onValueChange={onPriceRangeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any price</SelectItem>
              <SelectItem value="budget">$25-50/hr</SelectItem>
              <SelectItem value="mid">$50-100/hr</SelectItem>
              <SelectItem value="premium">$100-200/hr</SelectItem>
              <SelectItem value="luxury">$200+/hr</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Rating */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Star className="h-4 w-4" />
            Minimum Rating
          </label>
          <Select onValueChange={onRatingChange}>
            <SelectTrigger>
              <SelectValue placeholder="Any rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any rating</SelectItem>
              <SelectItem value="4.0">4.0+ stars</SelectItem>
              <SelectItem value="4.5">4.5+ stars</SelectItem>
              <SelectItem value="4.8">4.8+ stars</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Apply Filters */}
        <div className="flex items-end">
          <Button variant="premium" className="w-full">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;