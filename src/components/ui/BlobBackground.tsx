import { cn } from "@/lib/utils";

interface BlobBackgroundProps {
  className?: string;
  variant?: "hero" | "default";
}

export const BlobBackground = ({ className, variant = "default" }: BlobBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      {/* Subtle Animated Gradient 1 */}
      <div
        className={cn(
          "absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-10 animate-blob",
          variant === "hero" 
            ? "bg-gradient-to-r from-vitality-teal to-vitality-sky -top-48 -left-48"
            : "bg-gradient-to-r from-vitality-teal to-vitality-sky top-20 left-10"
        )}
        style={{ animationDelay: "0s" }}
      />
      
      {/* Subtle Animated Gradient 2 */}
      <div
        className={cn(
          "absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-8 animate-blob-slow",
          variant === "hero"
            ? "bg-gradient-to-r from-vitality-coral to-vitality-teal top-40 -right-32"
            : "bg-gradient-to-r from-vitality-coral to-vitality-teal top-60 right-20"
        )}
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
};
