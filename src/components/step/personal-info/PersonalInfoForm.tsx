import { PersonalInfoFormTypes } from "../../../types/types";

export const PersonalInfoForm = ({
  pesronalData,
  errors,
  onChangeName,
  onChangeEmail,
  onChangePhone,
}: PersonalInfoFormTypes) => {
  return (
    <div className="flex flex-col gap-4 text-[#173973] bg-white w-[90%] rounded-md py-7 px-5 shadow-md mb-auto">
      <h1 className="font-bold text-2xl">Personal Info</h1>
      <p className="text-gray-400 max-w-[250px]">
        Please provide your name, email address, and phone number.
      </p>
      <form className="flex flex-col font-semibold">
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        {errors.name.error && (
          <p className="text-red-600">{errors.name.message}</p>
        )}
        <input
          type="text"
          name="name"
          value={pesronalData.name}
          onChange={onChangeName}
          id="name"
          placeholder="e.g. Stephen King"
          className="border-1 border-gray-300 rounded-md p-2 placeholder-gray-400 mb-2"
        />
        <label htmlFor="email" className="text-sm">
          Email Address
        </label>
        {errors.email.error && (
          <p className="text-red-600">{errors.email.message}</p>
        )}
        <input
          type="email"
          name="email"
          value={pesronalData.email}
          onChange={onChangeEmail}
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          className="border-1 border-gray-300 rounded-md p-2 placeholder-gray-400 mb-2"
        />
        <label htmlFor="phone" className="text-sm">
          Phone Number
        </label>
        {errors.phone.error && (
          <p className="text-red-600">{errors.phone.message}</p>
        )}
        <input
          type="text"
          name="phone"
          value={pesronalData.phone}
          onChange={onChangePhone}
          id="phone"
          placeholder="e.g. +1 234 567 890"
          className="border-1 border-gray-300 rounded-md p-2 placeholder-gray-400"
        />
      </form>
    </div>
  );
};
