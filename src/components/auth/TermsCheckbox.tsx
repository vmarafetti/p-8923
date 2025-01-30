import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TermsCheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  children: React.ReactNode;
}

export function TermsCheckbox({ id, checked, onCheckedChange, children }: TermsCheckboxProps) {
  return (
    <div className="flex items-start space-x-3">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-1"
      />
      <Label
        htmlFor={id}
        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
      >
        {children}
      </Label>
    </div>
  );
}