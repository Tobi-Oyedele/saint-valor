import { FormData, StepTwoData } from "@/types/customOrder";

type StepTwoProps = {
  data: FormData;
  updateFormData: (fields: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
};

const StepTwo = ({ data, updateFormData, onNext, onPrev }: StepTwoProps) => {
  return (
    <div>
      <h2>Step Two</h2>
    </div>
  );
};

export default StepTwo;
