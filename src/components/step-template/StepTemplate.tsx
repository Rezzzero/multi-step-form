import { ReactNode } from "react";
import confirmIcon from "../../assets/images/icon-thank-you.svg";

export const StepTemplate = ({
  title,
  children,
  isConfirm,
}: {
  title: string;
  children: ReactNode;
  isConfirm?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-2 text-[#173973] bg-white w-[90%] rounded-md ${
        isConfirm ? "py-18 items-center text-center" : "py-7"
      } px-5 shadow-md mb-auto ${
        isConfirm ? "py-[20%]" : "lg:pt-10"
      } lg:shadow-none`}
    >
      {isConfirm && (
        <img src={confirmIcon} alt="confirm icon" className="w-12 lg:w-18" />
      )}
      <h1 className="font-bold text-2xl lg:text-4xl">{title}</h1>
      {children}
    </div>
  );
};
