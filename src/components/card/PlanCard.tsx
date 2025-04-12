import ProIcon from "../../assets/images/icon-pro.svg";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import { PlanCardTypes } from "../../types/types";
import { costMonthly, costEarly } from "../../constants/costs";

const icons = {
  Arcade: ArcadeIcon,
  Advanced: AdvancedIcon,
  Pro: ProIcon,
} as {
  [key: string]: string;
};

export const PlanCard = ({
  plan,
  isMonthly,
  selected,
  handleSelect,
}: PlanCardTypes) => {
  return (
    <div
      className={`flex gap-5 text-[#173973] border-1 items-start cursor-pointer ${
        selected === plan ? "border-[#06195c]" : "border-gray-300"
      } rounded-xl hover:border-indigo-600 px-4 py-3 lg:flex-col lg:gap-9 lg:w-[135px]`}
      onClick={() => handleSelect(plan)}
    >
      <img src={icons[plan]} alt="icon" />
      <div>
        <h1 className="font-bold">{plan}</h1>
        <p className="text-gray-400 text-sm">
          {isMonthly ? `$${costMonthly[plan]}/mo` : `$${costEarly[plan]}/yr`}
        </p>
        {!isMonthly && <p className="font-semibold text-xs">2 months free</p>}
      </div>
    </div>
  );
};
