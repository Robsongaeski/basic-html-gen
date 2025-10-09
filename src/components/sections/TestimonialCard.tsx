import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  rating?: number;
}

export default function TestimonialCard({ name, company, content, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="card-service">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      
      {/* Content */}
      <blockquote className="text-foreground mb-6 leading-relaxed">
        "{content}"
      </blockquote>
      
      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </div>
  );
}