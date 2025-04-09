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

const cost = {
  arcade: 9,
  advanced: 12,
  pro: 15,
} as {
  [key: string]: number;
};

export const PlanCard = ({
  plan,
  isMonthly,
}: {
  plan: string;
  isMonthly: boolean;
}) => {
  return (
    <div className="flex gap-5 border-1 border-gray-300 rounded-xl p-4">
      <img src={icons[plan]} alt="icon" />
      <div>
        <h1 className="font-bold">{name[plan]}</h1>
        <p className="text-gray-400 text-sm">
          {isMonthly ? `$${cost[plan]}/mo` : `$${cost[plan]}/yr`}
        </p>
      </div>
    </div>
  );
};
