import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'skeleton';
}

export default function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  loading = 'lazy',
  placeholder = 'skeleton'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', containerClassName)}>
      {/* Skeleton placeholder */}
      {!isLoaded && (
        <div 
          className={cn(
            'absolute inset-0 animate-pulse',
            placeholder === 'skeleton' ? 'bg-muted' : 'bg-muted/50 backdrop-blur-sm',
            className
          )}
        />
      )}
      
      {/* Actual image - only render when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
        />
      )}
    </div>
  );
}
