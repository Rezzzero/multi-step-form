import { PickAddOnsTypes } from "../../../types/types";
import { AddOnsCard } from "../../card/AddOnsCard";

export const PickAddOns = ({
  selectedAddOns,
  handleAddOns,
  isMonthly,
}: PickAddOnsTypes) => {
  return (
    <div className="flex flex-col gap-2 bg-white text-[#173973] w-[90%] rounded-md py-7 px-5 shadow-md mb-auto lg:shadow-none lg:pt-10">
      <h1 className="font-bold text-2xl lg:text-4xl">Pick add-ons</h1>
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
    </div>
  );
};
