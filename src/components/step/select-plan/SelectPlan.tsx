import { useState } from "react";
import { PlanCard } from "../../card/PlanCard";
import styles from "./SelectPlan.module.css";
import { SelectPlanTypes } from "../../../types/types";

export const SelectPlan = ({
  selectedPlan,
  selectPlanError,
  handleSelectPlan,
  handleToggleMonthly,
}: SelectPlanTypes) => {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-2 text-[#173973] bg-white w-[90%] rounded-md py-7 px-5 shadow-md mb-auto lg:pt-10 lg:shadow-none">
        <h1 className="font-bold text-2xl lg:text-4xl">Select your plan</h1>
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
            className={`${
              !toggled ? "text-[#06195c]" : "text-gray-400"
            } text-sm`}
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
            className={`${
              toggled ? "text-[#06195c]" : "text-gray-400"
            } text-sm`}
          >
            Yearly
          </p>
        </div>
        {selectPlanError && (
          <p className="text-red-600 text-center">You must select a plan!</p>
        )}
      </div>
    </>
  );
};
