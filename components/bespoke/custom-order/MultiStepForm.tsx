"use client";
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import { FormData } from "@/types/customOrder";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const MultiStepForm = () => {
  const [formData, setFormData] = useState<FormData>({
    // Step 1
    country: "",
    firstName: "",
    lastName: "",
    countryCode: "",
    phone: "",
    email: "",
    jewelryType: [],

    // Step 2
    ringType: "",
    metalType: "",
    ringSize: "",
    gemstoneType: "",
    gemstoneShape: "",
    gemstoneSize: "",
    gemstoneColor: "",

    // Step 3
    designImage: null,
    designDescription: "",
    engraving: "",
    budgetRange: "",
    deadline: "",
    specialRequests: "",

    // Step 4
    deliveryFirstName: "",
    deliveryLastName: "",
    deliveryCountryCode: "",
    deliveryPhone: "",
    deliveryAddress: "",
    deliveryCountry: "",
    deliveryState: "",
    deliveryCity: "",
    agreedToTerms: false,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            data={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <StepTwo
            data={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <StepThree
            data={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <StepFour
            data={formData}
            updateFormData={updateFormData}
            onPrev={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 bg-ivory">
      <StepIndicator currentStep={currentStep} />
      <div className="mt-10">{renderStep()}</div>
    </div>
  );
};

export default MultiStepForm;
