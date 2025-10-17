import { CheckCircle2, Circle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface JourneyStep {
  title: string;
  description: string;
  completed?: boolean;
}

interface ProgressJourneyProps {
  steps: JourneyStep[];
}

export const ProgressJourney = ({ steps }: ProgressJourneyProps) => {
  return (
    <div className="relative">
      {steps.map((step, index) => (
        <AnimatedSection key={index} delay={index * 100}>
          <div className="flex gap-6 mb-8 last:mb-0">
            {/* Timeline indicator */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "p-3 rounded-full transition-all duration-500 border-2",
                  step.completed
                    ? "bg-primary border-primary shadow-glow animate-scale-in"
                    : "bg-background border-border"
                )}
              >
                {step.completed ? (
                  <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
                ) : (
                  <Circle className="h-7 w-7 text-muted-foreground" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-1 h-full min-h-[60px] transition-colors duration-500 rounded-full",
                    step.completed ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8 bg-muted/30 rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};
