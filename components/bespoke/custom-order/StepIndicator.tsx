import { Check } from "lucide-react";

type StepIndicatorProps = {
  currentStep: number;
};

const steps = [
  "Personal Information",
  "Jewelry / Gemstone Details",
  "Design / Deadline",
  "Confirmation / Agreement",
];

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-start justify-center px-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className="flex items-start">
            {/* Circle + Label */}
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all
            ${isCompleted ? "bg-burgundy text-ivory" : "bg-placeholder text-charcoal"}`}
              >
                {isCompleted ? <Check size={14} strokeWidth={3} /> : stepNumber}
              </div>
              <span className="text-center text-[10px] leading-tight text-charcoal font-medium">
                {step}
              </span>
            </div>

            {/* Connecting line — not rendered after last step */}
            {index < steps.length - 1 && (
              <div className="mt-4 h-0.5 w-6 bg-gold transition-all lg:w-30" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
