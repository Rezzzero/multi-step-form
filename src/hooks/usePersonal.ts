import { useState } from "react";
import { ErrorsType, PersonalData } from "../types/types";

export const usePersonal = () => {
  const [pesronalData, setPersonalData] = useState<PersonalData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<ErrorsType>({
    name: { error: false, message: "" },
    email: { error: false, message: "" },
    phone: { error: false, message: "" },
  });

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({ ...pesronalData, name: e.target.value });
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({ ...pesronalData, email: e.target.value });
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({ ...pesronalData, phone: e.target.value });
  };

  return {
    pesronalData,
    errors,
    setErrors,
    onChangeName,
    onChangeEmail,
    onChangePhone,
  };
};
