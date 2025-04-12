import { PickAddOnsTypes } from "../../../types/types";
import { AddOnsCard } from "../../card/AddOnsCard";
import { StepTemplate } from "../../step-template/StepTemplate";

export const PickAddOns = ({
  selectedAddOns,
  handleAddOns,
  isMonthly,
}: PickAddOnsTypes) => {
  return (
    <StepTemplate title="Pick add-ons">
      <p className="text-gray-400 max-w-[250px] lg:max-w-full lg:mb-6">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-2 lg:gap-4">
        <AddOnsCard
          name="Online service"
          selected={selectedAddOns.includes("Online service")}
          handlePick={handleAddOns}
          isMonthly={isMonthly}
        />
        <AddOnsCard
          name="Larger storage"
          selected={selectedAddOns.includes("Larger storage")}
          handlePick={handleAddOns}
          isMonthly={isMonthly}
        />
        <AddOnsCard
          name="Customizable Profile"
          selected={selectedAddOns.includes("Customizable Profile")}
          handlePick={handleAddOns}
          isMonthly={isMonthly}
        />
      </div>
    </StepTemplate>
  );
};
