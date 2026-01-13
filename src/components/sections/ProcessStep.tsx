import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export default function ProcessStep({ step, title, description, icon: Icon, image }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Process Image */}
      <div className="relative mb-6">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all"
        />
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {step}
          </div>
        </div>
      </div>
      
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-primary/40 transition-all shadow-md">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}