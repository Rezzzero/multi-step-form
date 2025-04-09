import { useState } from "react";
import { PlanCard } from "../../card/PlanCard";
import styles from "./SelectPlan.module.css";

export const SelectPlan = () => {
  const [toggled, setToggled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  return (
    <>
      <div className="flex flex-col gap-4 bg-white w-[90%] rounded-md py-7 px-5 shadow-md mb-auto">
        <h1 className="font-bold text-2xl">Select your plan</h1>
        <p className="text-gray-400 max-w-[250px]">
          You have the option of monthly or yearly billing.
        </p>
        <PlanCard
          plan="arcade"
          isMonthly={true}
          selected={selectedPlan}
          handleSelect={setSelectedPlan}
        />
        <PlanCard
          plan="advanced"
          isMonthly={true}
          selected={selectedPlan}
          handleSelect={setSelectedPlan}
        />
        <PlanCard
          plan="pro"
          isMonthly={true}
          selected={selectedPlan}
          handleSelect={setSelectedPlan}
        />
        <div className="flex items-center justify-center gap-4 font-semibold">
          <p className={`${!toggled ? "text-[#06195c]" : "text-gray-400"}`}>
            Monthly
          </p>
          <button
            onClick={() => {
              setToggled(!toggled);
            }}
            className={`${styles.toggleBtn} ${toggled ? styles.toggled : ""}`}
          >
            <div className={styles.thumb}></div>
          </button>
          <p className={`${toggled ? "text-[#06195c]" : "text-gray-400"}`}>
            Yearly
          </p>
        </div>
      </div>
    </>
  );
};
