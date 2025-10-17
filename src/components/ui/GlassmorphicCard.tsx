import * as React from "react";
import { cn } from "@/lib/utils";

const GlassmorphicCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "strong" }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl transition-all duration-300",
      "hover:shadow-elevated hover:-translate-y-1",
      variant === "default" && "glass",
      variant === "strong" && "glass-strong",
      className
    )}
    {...props}
  />
));
GlassmorphicCard.displayName = "GlassmorphicCard";

const GlassmorphicCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
GlassmorphicCardHeader.displayName = "GlassmorphicCardHeader";

const GlassmorphicCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
GlassmorphicCardContent.displayName = "GlassmorphicCardContent";

export { GlassmorphicCard, GlassmorphicCardHeader, GlassmorphicCardContent };
