import { cn } from "@/lib/utils";

interface BlobBackgroundProps {
  className?: string;
  variant?: "hero" | "default";
}

export const BlobBackground = ({ className, variant = "default" }: BlobBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      {/* Animated Blob 1 */}
      <div
        className={cn(
          "absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-blob",
          variant === "hero" 
            ? "bg-gradient-to-r from-vitality-teal to-vitality-sky -top-48 -left-48"
            : "bg-gradient-to-r from-vitality-teal to-vitality-sky top-20 left-10"
        )}
        style={{ animationDelay: "0s" }}
      />
      
      {/* Animated Blob 2 */}
      <div
        className={cn(
          "absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-25 animate-blob-slow",
          variant === "hero"
            ? "bg-gradient-to-r from-vitality-gold to-vitality-tan top-40 -right-32"
            : "bg-gradient-to-r from-vitality-gold to-vitality-tan top-60 right-20"
        )}
        style={{ animationDelay: "2s" }}
      />
      
      {/* Animated Blob 3 */}
      <div
        className={cn(
          "absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-20 animate-blob",
          variant === "hero"
            ? "bg-gradient-to-r from-vitality-purple to-vitality-sky -bottom-32 left-1/3"
            : "bg-gradient-to-r from-vitality-purple to-vitality-sky bottom-20 left-1/2"
        )}
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
};
