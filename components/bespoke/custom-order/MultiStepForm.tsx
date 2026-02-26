"use client";
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import {
  CustomOrderFormData,
  StepOneData,
  StepTwoData,
  StepThreeData,
  StepFourData,
} from "@/types/customOrder";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const MultiStepForm = () => {
  const [formData, setFormData] = useState<CustomOrderFormData>({
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

  const updateStep1 = (fields: Partial<StepOneData>) =>
    setFormData((prev) => ({ ...prev, ...fields }));

  const updateStep2 = (fields: Partial<StepTwoData>) =>
    setFormData((prev) => ({ ...prev, ...fields }));

  const updateStep3 = (fields: Partial<StepThreeData>) =>
    setFormData((prev) => ({ ...prev, ...fields }));

  const updateStep4 = (fields: Partial<StepFourData>) =>
    setFormData((prev) => ({ ...prev, ...fields }));

  const TOTAL_STEPS = 4;
  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            data={formData as StepOneData}
            updateFormData={updateStep1}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <StepTwo
            data={formData as StepTwoData}
            updateFormData={updateStep2}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <StepThree
            data={formData as StepThreeData}
            updateFormData={updateStep3}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <StepFour
            data={formData as StepFourData}
            updateFormData={updateStep4}
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
