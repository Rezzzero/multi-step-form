import { PickAddOnsCardTypes } from "../../types/types";
import { addOnsCost } from "../../constants/costs";

const description = {
  "Online service": "Access to multiplayer games",
  "Larger storage": "Extra 1TB of cloud save",
  "Customizable Profile": "Custom theme on your profile",
} as {
  [key: string]: string;
};

export const AddOnsCard = ({
  name,
  selected,
  handlePick,
  isMonthly,
}: PickAddOnsCardTypes) => {
  return (
    <div
      className={`flex text-[#173973] px-3 py-2 border-1 ${
        selected ? "border-indigo-600" : "border-gray-300"
      } cursor-pointer items-center rounded-xl lg:py-4 lg:px-5`}
    >
      <div className="flex gap-2 mr-3 lg:mr-5" onClick={() => handlePick(name)}>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => handlePick(name)}
          id={`checkbox-${name}`}
          className="
            relative peer shrink-0
            appearance-none w-5 h-5 border-2 border-blue-500 rounded-md bg-white
            mt-1 checked:bg-indigo-700 checked:border-0"
        />
        <svg
          className="absolute w-3 h-3 mx-1 my-2 hidden peer-checked:block pointer-events-none lg:h-4 lg:w-4 lg:mx-[2px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p className="text-gray-400 text-sm">{description[name]}</p>
      </div>
      <p className="ml-auto text-sm text-blue-700">
        +${isMonthly ? addOnsCost[name] / 10 : addOnsCost[name]}/
        {isMonthly ? "mo" : "yr"}
      </p>
    </div>
  );
};
