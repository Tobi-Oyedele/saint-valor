import { CustomOrderFormData, StepFourData } from "@/types/customOrder";

type StepFourProps = {
  data: CustomOrderFormData;
  updateFormData: (fields: Partial<CustomOrderFormData>) => void;
  onPrev: () => void;
};

const StepFour = ({ data, updateFormData, onPrev }: StepFourProps) => {
  return (
    <div>
      <h2>Step Four</h2>
    </div>
  );
};

export default StepFour;
