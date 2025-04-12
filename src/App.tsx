import { useState } from "react";
import { PersonalInfoForm } from "./components/step/personal-info/PersonalInfoForm";
import { SelectPlan } from "./components/step/select-plan/SelectPlan";
import { PickAddOns } from "./components/step/pick-add-ons/PickAddOns";
import { FinishingUp } from "./components/step/finishing-up/FinishingUp";
import { StepNavigation } from "./components/step-navigation/StepNavigation";
import { Confirm } from "./components/step/confirm/Confirm";
import { usePersonal } from "./hooks/usePersonal";
import { validateFields } from "./utils/utils";
import { PlanData } from "./types/types";
import backgroundImg from "../src/assets/images/bg-sidebar-desktop.svg";

const stepsDesc = {
  1: "YOUR INFO",
  2: "SELECT PLAN",
  3: "ADD-ONS",
  4: "SUMMARY",
} as {
  [key: number]: string;
};

function App() {
  const {
    pesronalData,
    errors,
    setErrors,
    onChangeName,
    onChangeEmail,
    onChangePhone,
  } = usePersonal();
  const [data, setData] = useState<PlanData>({
    selectedPlanName: "",
    monthly: true,
    addOns: [],
  });
  const [selectPlanError, setSelectPlanError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3, 4];
  const [confirmed, setConfirmed] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 1) {
      const isValid = validateFields(pesronalData, setErrors);
      if (isValid) setCurrentStep(currentStep + 1);
    }
    if (currentStep === 2) {
      if (data.selectedPlanName === "") {
        setSelectPlanError(true);
      } else {
        setSelectPlanError(false);
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleToggleMonthly = () =>
    setData({ ...data, monthly: data.monthly ? false : true });

  const handleSelectPlan = (name: string) => {
    setData({ ...data, selectedPlanName: name });
    setSelectPlanError(false);
  };

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
    <div className="h-screen flex items-center justify-center">
      <div className="container flex flex-col lg:relative lg:flex-row lg:gap-20 lg:pl-5 lg:pr-15 lg:bg-white h-screen lg:max-h-[610px] lg:max-w-[1000px] pt-8 lg:pt-5 lg:pb-5 lg:rounded-xl items-center lg:items-start">
        <div
          className={`flex lg:flex-col lg:h-full lg:w-[370px] lg:bg-[url(../src/assets/images/bg-sidebar-desktop.svg)] lg:bg-no-repeat lg:p-10  gap-6 text-white mb-8`}
        >
          {steps.map((step) => {
            return (
              <div key={step} className="flex lg:gap-3">
                <div
                  className={`${
                    currentStep === step ? "bg-[#b3ebf2] text-black" : ""
                  } border-1 border-white rounded-full p-1 px-3 lg:max-w-[36px] lg:max-h-[36px]`}
                >
                  <h1 className="font-bold">{step}</h1>
                </div>
                <div className="hidden lg:block flex flex-col">
                  <h3 className="text-gray-400 text-xs">STEP {step}</h3>
                  <p className="font-bold text-sm tracking-widest">
                    {stepsDesc[step]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {currentStep === 1 && (
          <PersonalInfoForm
            pesronalData={pesronalData}
            errors={errors}
            onChangeName={onChangeName}
            onChangeEmail={onChangeEmail}
            onChangePhone={onChangePhone}
          />
        )}
        {currentStep === 2 && (
          <SelectPlan
            selectedPlan={data.selectedPlanName}
            selectPlanError={selectPlanError}
            handleSelectPlan={handleSelectPlan}
            handleToggleMonthly={handleToggleMonthly}
          />
        )}
        {currentStep === 3 && (
          <PickAddOns
            selectedAddOns={data.addOns}
            handleAddOns={handlePickAddOns}
            isMonthly={data.monthly}
          />
        )}
        {currentStep === 4 && !confirmed && (
          <FinishingUp data={data} changeStep={setCurrentStep} />
        )}
        {currentStep === 4 && confirmed && <Confirm />}
        {!confirmed && (
          <StepNavigation
            currentStep={currentStep}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            setConfirmed={setConfirmed}
          />
        )}
      </div>
    </div>
  );
}

export default App;
