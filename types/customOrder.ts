export type StepOneData = {
  country: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phone: string;
  email: string;
  jewelryType: string[];
};

export type StepTwoData = {
  ringType: string;
  metalType: string;
  ringSize: string;
  gemstoneType: string;
  gemstoneShape: string;
  gemstoneSize: string;
  gemstoneColor: string;
};

export type StepThreeData = {
  designImage: File | null;
  designDescription: string;
  engraving: string;
  budgetRange: string;
  deadline: string;
  specialRequests: string;
};

export type StepFourData = {
  deliveryFirstName: string;
  deliveryLastName: string;
  deliveryCountryCode: string;
  deliveryPhone: string;
  deliveryAddress: string;
  deliveryCountry: string;
  deliveryState: string;
  deliveryCity: string;
  agreedToTerms: boolean;
};

export type FormData = StepOneData & StepTwoData & StepThreeData & StepFourData;
