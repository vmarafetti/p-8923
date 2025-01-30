import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TermsCheckbox } from "./TermsCheckbox";
import { SignUpSteps } from "./SignUpSteps";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

export function SignUpForm() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-[480px] mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Apply to join Andela</h1>
        <p className="text-muted-foreground">
          Discover exciting remote roles at the world's best companies, join a vibrant community, and access exclusive learning opportunities and benefits.
        </p>
      </div>

      <SignUpSteps currentStep={1} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="Write your first name"
              {...register("firstName", { required: true })}
            />
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Write your last name"
              {...register("lastName", { required: true })}
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Example: fullname@email.com"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <Label htmlFor="country">Country</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <TermsCheckbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={setTermsAccepted}
          >
            I agree to Andela's{" "}
            <a href="#" className="text-[#198038] font-bold underline">
              Terms & Conditions.
            </a>
          </TermsCheckbox>

          <TermsCheckbox
            id="privacy"
            checked={privacyAccepted}
            onCheckedChange={setPrivacyAccepted}
          >
            I understand that Andela will process my information in accordance with their{" "}
            <a href="#" className="text-[#198038] font-bold underline">
              Privacy Policy
            </a>
            . I may withdraw my consent through unsubscribe links at any time.
          </TermsCheckbox>
        </div>

        <div className="space-y-4">
          <Button type="submit" className="w-full">
            Get started
          </Button>

          <p className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account?</span>{" "}
            <a href="#" className="font-bold underline">
              Sign in
            </a>
          </p>

          <div className="h-px bg-border" />

          <p className="text-center text-sm">
            <span className="text-muted-foreground">Are you looking to hire talent?</span>{" "}
            <a href="#" className="font-bold underline">
              Start here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}