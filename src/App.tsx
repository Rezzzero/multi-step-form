import { useState } from "react";
import { PersonalInfoForm } from "./components/step/personal-info/PersonalInfoForm";
import { SelectPlan } from "./components/step/select-plan/SelectPlan";
import { PickAddOns } from "./components/step/pick-add-ons/PickAddOns";
import { FinishingUp } from "./components/step/finishing-up/FinishingUp";
import { StepNavigation } from "./components/step-navigation/StepNavigation";
import { Confirm } from "./components/step/confirm/Confirm";

function App() {
  const [data, setData] = useState({
    selectedPlanName: "",
    monthly: true,
    addOns: [] as string[],
  });
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3, 4];
  const [confirmed, setConfirmed] = useState(false);
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
      {currentStep === 4 && !confirmed && (
        <FinishingUp data={data} changeStep={setCurrentStep} />
      )}
      {currentStep === 4 && confirmed && <Confirm />}
      {!confirmed && (
        <StepNavigation
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setConfirmed={setConfirmed}
        />
      )}
    </div>
  );
}

export default App;
