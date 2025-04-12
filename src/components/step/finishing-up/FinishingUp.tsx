import { FinishingUpTypes } from "../../../types/types";
import { costMonthly, costEarly, addOnsCost } from "../../../constants/costs";

export const FinishingUp = ({ data, changeStep }: FinishingUpTypes) => {
  const totalCost = (monthly: boolean) => {
    let total = 0;
    if (data.monthly) {
      total += costMonthly[data.selectedPlanName];
    } else {
      total += costEarly[data.selectedPlanName];
    }
    data.addOns.forEach((addOn) => {
      total += monthly ? addOnsCost[addOn] / 10 : addOnsCost[addOn];
    });
    return total;
  };

  return (
    <div className="flex flex-col text-[#173973] gap-2 bg-white w-[90%] rounded-md py-7 px-5 shadow-md mb-auto lg:shadow-none lg:pt-10">
      <h1 className="font-bold text-2xl lg:text-4xl">Finishing up</h1>
      <p className="text-gray-400 max-w-[250px] lg:max-w-full lg:mb-10">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex justify-between lg:px-6">
        <div className="flex flex-col items-start">
          <h1 className="font-semibold lg:font-bold">
            {data.selectedPlanName} {data.monthly ? "(Monthly)" : "(Yearly)"}
          </h1>
          <button
            type="button"
            onClick={() => changeStep(2)}
            className="text-gray-400 underline"
          >
            Change
          </button>
        </div>
        <p className="font-bold">
          $
          {data.monthly
            ? costMonthly[data.selectedPlanName]
            : costEarly[data.selectedPlanName]}
          /{data.monthly ? "mo" : "yr"}
        </p>
      </div>
      {data.addOns.length > 0 && (
        <div className="flex flex-col gap-2 mt-4 lg:mb-6 lg:px-6">
          {data.addOns.map((addOn) => {
            return (
              <div className="flex justify-between" key={addOn}>
                <div className="flex flex-col">
                  <h1 className="text-gray-400">{addOn}</h1>
                </div>
                <p className="font-semibold">
                  +${data.monthly ? addOnsCost[addOn] / 10 : addOnsCost[addOn]}/
                  {data.monthly ? "mo" : "yr"}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-between lg:px-6">
        <h1 className="text-gray-400">
          Total {data.monthly ? "(per month)" : "(per year)"}
        </h1>
        <p className="text-blue-600 font-bold">
          ${totalCost(data.monthly)}/{data.monthly ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};
