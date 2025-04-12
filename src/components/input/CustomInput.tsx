import { CustomInputTypes } from "../../types/types";

export const CustomInput = ({
  type,
  name,
  value,
  onChange,
  id,
  placeholder,
  error,
}: CustomInputTypes) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
      className={`border-1 ${
        error ? "border-red-700" : "border-gray-300"
      } rounded-md p-2 placeholder-gray-400 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 lg:h-12 lg:p-4 lg:mb-5`}
    />
  );
};
