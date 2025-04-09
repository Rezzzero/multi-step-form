import ProIcon from "../../assets/images/icon-pro.svg";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";

const name = {
  arcade: "Arcade",
  advanced: "Advanced",
  pro: "Pro",
} as {
  [key: string]: string;
};

const icons = {
  arcade: ArcadeIcon,
  advanced: AdvancedIcon,
  pro: ProIcon,
} as {
  [key: string]: string;
};

const costMonthly = {
  arcade: 9,
  advanced: 12,
  pro: 15,
} as {
  [key: string]: number;
};

const costEarly = {
  arcade: 90,
  advanced: 120,
  pro: 150,
} as {
  [key: string]: number;
};

export const PlanCard = ({
  plan,
  isMonthly,
  selected,
  handleSelect,
}: {
  plan: string;
  isMonthly: boolean;
  selected: string;
  handleSelect: (plan: string) => void;
}) => {
  return (
    <div
      className={`flex gap-5 border-1 items-start cursor-pointer ${
        selected === plan ? "border-[#06195c]" : "border-gray-300"
      } rounded-xl px-4 py-3`}
      onClick={() => handleSelect(plan)}
    >
      <img src={icons[plan]} alt="icon" />
      <div>
        <h1 className="font-bold text-[#06195c]">{name[plan]}</h1>
        <p className="text-gray-400 text-sm">
          {isMonthly ? `$${costMonthly[plan]}/mo` : `$${costEarly[plan]}/yr`}
        </p>
        {!isMonthly && <p className="font-semibold text-xs">2 months free</p>}
      </div>
    </div>
  );
};
