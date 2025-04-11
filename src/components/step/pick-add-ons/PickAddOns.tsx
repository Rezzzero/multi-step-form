import { PickAddOnsTypes } from "../../../types/types";
import { AddOnsCard } from "../../card/AddOnsCard";

export const PickAddOns = ({
  selectedAddOns,
  handleAddOns,
  isMonthly,
}: PickAddOnsTypes) => {
  return (
    <div className="flex flex-col gap-2 bg-white text-[#173973] w-[90%] rounded-md py-7 px-5 shadow-md mb-auto">
      <h1 className="font-bold text-2xl">Pick add-ons</h1>
      <p className="text-gray-400 max-w-[250px]">
        Add-ons help enhance your gaming experience.
      </p>
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
  );
};
