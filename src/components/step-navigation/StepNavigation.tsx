export const StepNavigation = ({
  currentStep,
  setCurrentStep,
  setConfirmed,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setConfirmed: (confirmed: boolean) => void;
}) => {
  return (
    <div
      className={`flex bg-white w-full h-[72px] py-4 px-5 ${
        currentStep > 1 ? "justify-between" : "justify-end"
      }`}
    >
      {currentStep > 1 && (
        <button
          type="button"
          onClick={() => setCurrentStep(currentStep - 1)}
          className="text-gray-400"
        >
          Go Back
        </button>
      )}
      {currentStep === 4 && (
        <button
          type="button"
          onClick={() => setConfirmed(true)}
          className="bg-indigo-700 text-white font-semibold px-4 py-2 rounded-sm self-end"
        >
          Confirm
        </button>
      )}
      {currentStep < 4 && (
        <button
          type="button"
          onClick={() => setCurrentStep(currentStep + 1)}
          className="bg-[#06195c] text-white px-3 py-2 rounded-sm self-end"
        >
          Next Step
        </button>
      )}
    </div>
  );
};
