import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number;
  once?: boolean;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 750,
  threshold = 0.12,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Determine initial off-screen styles based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 36px, 0)';
      case 'down':
        return 'translate3d(0, -36px, 0)';
      case 'left':
        return 'translate3d(40px, 0, 0)';
      case 'right':
        return 'translate3d(-40px, 0, 0)';
      case 'zoom':
        return 'scale3d(0.92, 0.92, 1)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : getInitialTransform(),
    filter: isVisible ? 'blur(0px)' : 'blur(4px)',
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform, filter',
  };

  return (
    <div ref={domRef} style={style} className={className}>
      {children}
    </div>
  );
};
