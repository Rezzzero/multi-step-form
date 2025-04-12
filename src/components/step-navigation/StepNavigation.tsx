import { StepNavigationTypes } from "../../types/types";

export const StepNavigation = ({
  currentStep,
  handlePrevStep,
  handleNextStep,
  setConfirmed,
}: StepNavigationTypes) => {
  return (
    <div
      className={`flex bg-white w-full h-[72px] lg:w-[490px] lg:absolute lg:bottom-5 lg:right-24 py-4 px-5 ${
        currentStep > 1 ? "justify-between" : "justify-end"
      }`}
    >
      {currentStep > 1 && (
        <button
          type="button"
          onClick={() => handlePrevStep()}
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
          onClick={() => handleNextStep()}
          className="bg-[#06195c] hover:bg-[#384c94] text-white px-3 py-2 rounded-sm self-end lg:px-5 lg:py-[10px] lg:rounded-md"
        >
          Next Step
        </button>
      )}
    </div>
  );
};
