import { StepFourData } from "@/types/customOrder";

type StepFourProps = {
  data: StepFourData;
  updateFormData: (fields: Partial<StepFourData>) => void;
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
