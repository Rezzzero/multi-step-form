const isValidName = (value: string) => /^[a-zA-Z\s]+$/.test(value);
const isValidPhone = (value: string) => /^\+?\d{10,15}$/.test(value);
const isValidEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

export const validateFields = (
  fields: { name: string; phone: string; email: string },
  setErrors: React.Dispatch<
    React.SetStateAction<{
      name: { error: boolean; message: string };
      phone: { error: boolean; message: string };
      email: { error: boolean; message: string };
    }>
  >
) => {
  const newErrors = {
    name: { error: false, message: "" },
    phone: { error: false, message: "" },
    email: { error: false, message: "" },
  };

  if (!fields.name.trim()) {
    newErrors.name = { error: true, message: "Name is required" };
  } else if (!isValidName(fields.name)) {
    newErrors.name = { error: true, message: "Name is invalid" };
  }

  if (!fields.phone.trim()) {
    newErrors.phone = { error: true, message: "Phone number is required" };
  } else if (!isValidPhone(fields.phone)) {
    newErrors.phone = { error: true, message: "Phone number is invalid" };
  }

  if (!fields.email.trim()) {
    newErrors.email = { error: true, message: "Email is required" };
  } else if (!isValidEmail(fields.email)) {
    newErrors.email = { error: true, message: "Email is invalid" };
  }

  setErrors(newErrors);

  return Object.values(newErrors).every((err) => !err.error);
};
