import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  imageUrl?: string;
}

export default function ServiceCard({ title, description, icon: Icon, href, imageUrl }: ServiceCardProps) {
  return (
    <div className="card-service group">
      {imageUrl && (
        <Link to={href} className="block mb-4 overflow-hidden rounded-lg cursor-pointer">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      )}
      
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-white border-2 border-primary/20 p-2 rounded-lg shadow-sm">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <Link to={href} className="hover:underline">
          <h3 className="font-semibold text-xl text-foreground">{title}</h3>
        </Link>
      </div>
      
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {description}
      </p>
      
      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
        <Link to={href} className="flex items-center justify-center gap-2">
          Ver serviço
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}