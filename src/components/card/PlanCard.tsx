import ProIcon from "../../assets/images/icon-pro.svg";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import { PlanCardTypes } from "../../types/types";

const icons = {
  Arcade: ArcadeIcon,
  Advanced: AdvancedIcon,
  Pro: ProIcon,
} as {
  [key: string]: string;
};

const costMonthly = {
  Arcade: 9,
  Advanced: 12,
  Pro: 15,
} as {
  [key: string]: number;
};

const costEarly = {
  Arcade: 90,
  Advanced: 120,
  Pro: 150,
} as {
  [key: string]: number;
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
      } rounded-xl px-4 py-3`}
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
