import { StepTwoData } from "@/types/customOrder";
import { useState } from "react";

type StepTwoProps = {
  data: StepTwoData;
  updateFormData: (fields: Partial<StepTwoData>) => void;
  onNext: () => void;
  onPrev: () => void;
};

type StepTwoErrors = Partial<Record<keyof StepTwoData, string>>;

const ringType = ["Engagement Ring", "Wedding Band", "Fashion Ring"];
const metalType = ["Gold", "Silver", "Platinum"];
const ringSizes = ["5", "6", "7", "8", "9", "10"];
const gemstoneType = ["Diamond", "Sapphire", "Emerald", "Ruby"];
const gemstoneShape = ["Round", "Princess", "Emerald", "Oval"];
const gemstoneSize = ["0.5 carat", "1 carat", "1.5 carat", "2 carat"];
const gemstoneColor = ["D (colorless)", "E (colorless)", "F (colorless)"];

const StepTwo = ({ data, updateFormData, onNext, onPrev }: StepTwoProps) => {
  const [errors, setErrors] = useState<StepTwoErrors>({});

  const validate = () => {
    const newErrors: StepTwoErrors = {};

    if (!data.ringType) newErrors.ringType = "Please select a ring type";
    if (!data.metalType) newErrors.metalType = "Please select a metal type";
    if (!data.ringSize) newErrors.ringSize = "Please select a ring size";
    if (data.gemstoneType.length === 0)
      newErrors.gemstoneType = "Please select at least one gemstone type";
    if (data.gemstoneShape.length === 0)
      newErrors.gemstoneShape = "Please select at least one gemstone shape";
    if (!data.gemstoneSize)
      newErrors.gemstoneSize = "Please select a gemstone size";
    if (!data.gemstoneColor)
      newErrors.gemstoneColor = "Please select a gemstone color";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  const selectClass =
    "w-full rounded-lg border border-placeholder bg-transparent px-3 py-2.5 text-sm text-charcoal outline-none";

  return (
    <div>
      <h2>Step Two</h2>
    </div>
  );
};

export default StepTwo;
