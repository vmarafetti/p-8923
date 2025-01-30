import { cn } from "@/lib/utils";

interface SignUpStepsProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: "Account" },
  { id: 2, name: "Experience" },
  { id: 3, name: "Feedback" },
];

export function SignUpSteps({ currentStep }: SignUpStepsProps) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={cn(
              stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative"
            )}
          >
            <div className="flex items-center">
              <div
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full",
                  step.id === currentStep
                    ? "border-2 border-primary bg-background"
                    : step.id < currentStep
                    ? "bg-primary"
                    : "border-2 border-muted bg-background"
                )}
              >
                <span className={cn(
                  "h-2.5 w-2.5 rounded-full",
                  step.id === currentStep ? "bg-primary" : "bg-transparent"
                )} />
              </div>
              <span className="ml-4 text-[#424D53] text-center font-inter text-sm font-semibold leading-5">
                {step.name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}