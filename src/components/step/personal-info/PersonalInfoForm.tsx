import { PersonalInfoFormTypes } from "../../../types/types";
import { CustomInput } from "../../input/CustomInput";
import { CustomLabel } from "../../label/CustomLabel";
import { StepTemplate } from "../../step-template/StepTemplate";

export const PersonalInfoForm = ({
  pesronalData,
  errors,
  onChangeName,
  onChangeEmail,
  onChangePhone,
}: PersonalInfoFormTypes) => {
  return (
    <StepTemplate title="Personal Info">
      <p className="text-gray-400 max-w-[250px] lg:max-w-full lg:mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <form className="flex flex-col font-semibold">
        <CustomLabel
          labelName="Name"
          htmlFor="name"
          error={errors.name.error}
          errorMessage={errors.name.message}
        />
        <CustomInput
          type="text"
          name="name"
          value={pesronalData.name}
          onChange={onChangeName}
          id="name"
          placeholder="e.g. Stephen King"
          error={errors.name.error}
        />
        <CustomLabel
          labelName="Email Address"
          htmlFor="email"
          error={errors.email.error}
          errorMessage={errors.email.message}
        />
        <CustomInput
          type="email"
          name="email"
          value={pesronalData.email}
          onChange={onChangeEmail}
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          error={errors.email.error}
        />
        <CustomLabel
          labelName="Phone Number"
          htmlFor="phone"
          error={errors.phone.error}
          errorMessage={errors.phone.message}
        />
        <CustomInput
          type="text"
          name="phone"
          value={pesronalData.phone}
          onChange={onChangePhone}
          id="phone"
          placeholder="e.g. +1 234 567 890"
          error={errors.phone.error}
        />
      </form>
    </StepTemplate>
  );
};
