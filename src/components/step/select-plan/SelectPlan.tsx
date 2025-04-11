import { useState } from "react";
import { PlanCard } from "../../card/PlanCard";
import styles from "./SelectPlan.module.css";
import { SelectPlanTypes } from "../../../types/types";

export const SelectPlan = ({
  selectedPlan,
  handleSelectPlan,
  handleToggleMonthly,
}: SelectPlanTypes) => {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-2 text-[#173973] bg-white w-[90%] rounded-md py-7 px-5 shadow-md mb-auto">
        <h1 className="font-bold text-2xl">Select your plan</h1>
        <p className="text-gray-400 max-w-[250px]">
          You have the option of monthly or yearly billing.
        </p>
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
        <div className="flex items-center justify-center mt-4 gap-4 font-semibold">
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
      </div>
    </>
  );
};
