import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'eager' && imgRef.current) {
      const img = imgRef.current;
      if (img.complete) {
        setIsLoaded(true);
      }
    }
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && !hasError && placeholder && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{ backgroundImage: `url(${placeholder})` }}
        />
      )}
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {hasError && (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
          <span className="text-gray-500 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};