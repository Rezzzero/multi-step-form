import { StepTemplate } from "../../step-template/StepTemplate";

export const Confirm = () => {
  return (
    <StepTemplate title="Thank you!" isConfirm={true}>
      <p className="text-gray-400 font-semibold text-base">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </StepTemplate>
  );
};
