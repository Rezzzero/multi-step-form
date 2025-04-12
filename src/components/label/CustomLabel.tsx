import { CustomLabelTypes } from "../../types/types";

export const CustomLabel = ({
  labelName,
  htmlFor,
  error,
  errorMessage,
}: CustomLabelTypes) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm lg:flex lg:justify-between lg:font-bold lg:mb-1"
    >
      {labelName}
      {error && <p className="text-red-600">{errorMessage}</p>}
    </label>
  );
};
