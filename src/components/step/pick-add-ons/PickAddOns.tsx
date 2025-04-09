import { useState } from "react";
import { AddOnsCard } from "../../card/AddOnsCard";

export const PickAddOns = () => {
  const [pickedAddOns, setPickedAddOns] = useState([] as string[]);

  const handleAddOns = (name: string) => {
    if (pickedAddOns.includes(name)) {
      setPickedAddOns(pickedAddOns.filter((addOn) => addOn !== name));
    } else {
      setPickedAddOns([...pickedAddOns, name]);
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-white w-[90%] rounded-md py-7 px-5 shadow-md mb-auto">
      <h1 className="font-bold text-2xl text-[#06195c]">Pick add-ons</h1>
      <p className="text-gray-400 max-w-[250px]">
        Add-ons help enhance your gaming experience.
      </p>
      <AddOnsCard
        name="Online service"
        selected={pickedAddOns.includes("Online service")}
        handlePick={handleAddOns}
      />
      <AddOnsCard
        name="Larger storage"
        selected={pickedAddOns.includes("Larger storage")}
        handlePick={handleAddOns}
      />
      <AddOnsCard
        name="Customizable Profile"
        selected={pickedAddOns.includes("Customizable Profile")}
        handlePick={handleAddOns}
      />
    </div>
  );
};
