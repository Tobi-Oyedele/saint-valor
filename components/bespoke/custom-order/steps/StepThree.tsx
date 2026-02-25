import { CustomOrderFormData, StepThreeData } from "@/types/customOrder";

type StepThreeProps = {
  data: CustomOrderFormData;
  updateFormData: (fields: Partial<CustomOrderFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
};

const StepThree = ({
  data,
  updateFormData,
  onNext,
  onPrev,
}: StepThreeProps) => {
  return (
    <div>
      <h2>Step Three</h2>
    </div>
  );
};

export default StepThree;
