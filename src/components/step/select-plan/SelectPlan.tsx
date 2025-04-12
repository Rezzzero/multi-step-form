import { useState } from "react";
import { PlanCard } from "../../card/PlanCard";
import styles from "./SelectPlan.module.css";
import { SelectPlanTypes } from "../../../types/types";
import { StepTemplate } from "../../step-template/StepTemplate";

export const SelectPlan = ({
  selectedPlan,
  selectPlanError,
  handleSelectPlan,
  handleToggleMonthly,
}: SelectPlanTypes) => {
  const [toggled, setToggled] = useState(false);
  return (
    <StepTemplate title="Select your plan">
      <p className="text-gray-400 max-w-[250px] lg:max-w-full lg:mb-6">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-2 mb-4 lg:flex-row lg:gap-4 lg:mb-8">
        <PlanCard
          plan="Arcade"
          isMonthly={!toggled}
          selected={selectedPlan}
          handleSelect={handleSelectPlan}
        />
        <PlanCard
          plan="Advanced"
          isMonthly={!toggled}
          selected={selectedPlan}
          handleSelect={handleSelectPlan}
        />
        <PlanCard
          plan="Pro"
          isMonthly={!toggled}
          selected={selectedPlan}
          handleSelect={handleSelectPlan}
        />
      </div>
      <div className="flex items-center justify-center gap-4 font-semibold lg:font-bold">
        <p
          className={`${!toggled ? "text-[#06195c]" : "text-gray-400"} text-sm`}
        >
          Monthly
        </p>
        <button
          onClick={() => {
            setToggled(!toggled);
            handleToggleMonthly();
          }}
          className={`${styles.toggleBtn} ${toggled ? styles.toggled : ""}`}
        >
          <div className={styles.thumb}></div>
        </button>
        <p
          className={`${toggled ? "text-[#06195c]" : "text-gray-400"} text-sm`}
        >
          Yearly
        </p>
      </div>
      {selectPlanError && (
        <p className="text-red-600 text-center">You must select a plan!</p>
      )}
    </StepTemplate>
  );
};
