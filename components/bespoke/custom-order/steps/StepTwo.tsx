import { CustomOrderFormData, StepTwoData } from "@/types/customOrder";

type StepTwoProps = {
  data: StepTwoData;
  updateFormData: (fields: Partial<CustomOrderFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
};

type StepTwoErrors = Partial<Record<keyof StepTwoData, string>>;

const StepTwo = ({ data, updateFormData, onNext, onPrev }: StepTwoProps) => {
  return (
    <div>
      <h2>Step Two</h2>
    </div>
  );
};

export default StepTwo;
