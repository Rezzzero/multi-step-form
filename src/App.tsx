import { useState } from "react";
import { PersonalInfoForm } from "./components/step/personal-info/PersonalInfoForm";
import { SelectPlan } from "./components/step/select-plan/SelectPlan";
import { PickAddOns } from "./components/step/pick-add-ons/PickAddOns";

function App() {
  const [data, setData] = useState({
    selectedPlanName: "",
    monthly: true,
    addOns: [] as string[],
  });
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3, 4];
  const handleToggleMonthly = () =>
    setData({ ...data, monthly: data.monthly ? false : true });

  const handleSelectPlan = (name: string) =>
    setData({ ...data, selectedPlanName: name });

  const handlePickAddOns = (name: string) => {
    if (data.addOns.includes(name)) {
      setData({
        ...data,
        addOns: data.addOns.filter((addOn) => addOn !== name),
      });
    } else {
      setData({ ...data, addOns: [...data.addOns, name] });
    }
  };

  return (
    <div className="container mx-auto flex flex-col h-screen pt-8 items-center">
      <div className="flex gap-4 text-white mb-8">
        {steps.map((step) => {
          return (
            <div
              key={step}
              className={`${
                currentStep === step ? "bg-[#b3ebf2] text-black" : ""
              } border-1 border-white rounded-full p-1 px-3`}
            >
              <h1 className="font-bold">{step}</h1>
            </div>
          );
        })}
      </div>
      {currentStep === 1 && <PersonalInfoForm />}
      {currentStep === 2 && (
        <SelectPlan
          selectedPlan={data.selectedPlanName}
          handleSelectPlan={handleSelectPlan}
          handleToggleMonthly={handleToggleMonthly}
        />
      )}
      {currentStep === 3 && (
        <PickAddOns
          selectedAddOns={data.addOns}
          handleAddOns={handlePickAddOns}
        />
      )}
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
    </div>
  );
}

export default App;
