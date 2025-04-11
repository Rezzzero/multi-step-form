export interface PersonalData {
  name: string;
  email: string;
  phone: string;
}

export interface ErrorsType {
  name: { error: boolean; message: string };
  email: { error: boolean; message: string };
  phone: { error: boolean; message: string };
}

export interface PlanData {
  selectedPlanName: string;
  monthly: boolean;
  addOns: string[];
}

export interface PersonalInfoFormTypes {
  pesronalData: PersonalData;
  errors: ErrorsType;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectPlanTypes {
  selectedPlan: string;
  selectPlanError: boolean;
  handleSelectPlan: (name: string) => void;
  handleToggleMonthly: () => void;
}

export interface PlanCardTypes {
  plan: string;
  isMonthly: boolean;
  selected: string;
  handleSelect: (plan: string) => void;
}

export interface PickAddOnsTypes {
  selectedAddOns: string[];
  handleAddOns: (name: string) => void;
  isMonthly: boolean;
}

export interface PickAddOnsCardTypes {
  name: string;
  selected: boolean;
  handlePick: (name: string) => void;
  isMonthly: boolean;
}

export interface FinishingUpTypes {
  data: PlanData;
  changeStep: (step: number) => void;
}

export interface StepNavigationTypes {
  currentStep: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  setConfirmed: (confirmed: boolean) => void;
}
