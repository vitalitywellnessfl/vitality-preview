import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in-up" | "fade-in" | "scale-in";
}

export const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0,
  animation = "fade-in-up" 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        !isVisible && "opacity-0",
        isVisible && {
          "fade-in-up": "animate-fade-in-up",
          "fade-in": "animate-fade-in",
          "scale-in": "animate-scale-in",
        }[animation],
        className
      )}
    >
      {children}
    </div>
  );
};
