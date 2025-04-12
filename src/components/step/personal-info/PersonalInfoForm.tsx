import { PersonalInfoFormTypes } from "../../../types/types";

export const PersonalInfoForm = ({
  pesronalData,
  errors,
  onChangeName,
  onChangeEmail,
  onChangePhone,
}: PersonalInfoFormTypes) => {
  return (
    <div className="flex flex-col gap-4 text-[#173973] bg-white w-[90%] rounded-md py-7 px-5 shadow-md mb-auto lg:gap-2 lg:pt-10 lg:shadow-none">
      <h1 className="font-bold text-2xl lg:text-4xl">Personal Info</h1>
      <p className="text-gray-400 max-w-[250px] lg:max-w-full lg:mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <form className="flex flex-col font-semibold">
        <label
          htmlFor="name"
          className="text-sm lg:flex lg:justify-between lg:font-bold lg:mb-1"
        >
          Name
          {errors.name.error && (
            <p className="text-red-600">{errors.name.message}</p>
          )}
        </label>
        <input
          type="text"
          name="name"
          value={pesronalData.name}
          onChange={onChangeName}
          id="name"
          placeholder="e.g. Stephen King"
          className={`border-1 ${
            errors.name.error ? "border-red-700" : "border-gray-300"
          } rounded-md p-2 placeholder-gray-400 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 lg:h-12 lg:p-4 lg:mb-5`}
        />
        <label
          htmlFor="email"
          className="text-sm lg:flex lg:justify-between lg:font-bold lg:mb-1"
        >
          Email Address
          {errors.email.error && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </label>
        <input
          type="email"
          name="email"
          value={pesronalData.email}
          onChange={onChangeEmail}
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          className={`border-1 ${
            errors.email.error ? "border-red-700" : "border-gray-300"
          } rounded-md p-2 placeholder-gray-400 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 lg:h-12 lg:p-4 lg:mb-5`}
        />
        <label
          htmlFor="phone"
          className="text-sm lg:flex lg:justify-between lg:font-bold lg:mb-1"
        >
          Phone Number
          {errors.phone.error && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}
        </label>
        <input
          type="text"
          name="phone"
          value={pesronalData.phone}
          onChange={onChangePhone}
          id="phone"
          placeholder="e.g. +1 234 567 890"
          className={`border-1 ${
            errors.phone.error ? "border-red-700" : "border-gray-300"
          } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 lg:h-12 lg:p-4 placeholder-gray-400`}
        />
      </form>
    </div>
  );
};
