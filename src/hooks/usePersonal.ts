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
    setErrors({ ...errors, name: { error: false, message: "" } });
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({ ...pesronalData, email: e.target.value });
    setErrors({ ...errors, email: { error: false, message: "" } });
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({ ...pesronalData, phone: e.target.value });
    setErrors({ ...errors, phone: { error: false, message: "" } });
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
