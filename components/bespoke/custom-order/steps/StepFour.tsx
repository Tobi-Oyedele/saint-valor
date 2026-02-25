import { FormData, StepFourData } from "@/types/customOrder";

type StepFourProps = {
  data: FormData;
  updateFormData: (fields: Partial<FormData>) => void;
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
