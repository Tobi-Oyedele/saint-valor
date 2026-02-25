"use client";

import { useState } from "react";
import { FormData } from "@/types/customOrder";
import TextInput from "@/components/ui/TextInput";
import EmailInput from "@/components/ui/EmailInput";
import Button from "@/components/ui/Button";
import {
  firstNameSchema,
  lastNameSchema,
  emailSchema,
} from "@/lib/validation/auth";

type StepOneProps = {
  data: FormData;
  updateFormData: (fields: Partial<FormData>) => void;
  onNext: () => void;
};

type StepOneErrors = {
  country?: string;
  firstName?: string;
  lastName?: string;
  countryCode?: string;
  phone?: string;
  email?: string;
  jewelryType?: string;
};

const countries = [
  "Nigeria",
  "United States",
  "United Kingdom",
  "Canada",
  "Ghana",
  "South Africa",
  "Kenya",
  "Australia",
  "Germany",
  "France",
];

const countryCodes = [
  { code: "+234", label: "NG +234" },
  { code: "+1", label: "US +1" },
  { code: "+44", label: "UK +44" },
  { code: "+1", label: "CA +1" },
  { code: "+233", label: "GH +233" },
  { code: "+27", label: "ZA +27" },
  { code: "+254", label: "KE +254" },
  { code: "+61", label: "AU +61" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
];

const jewelryTypes = ["Ring", "Earrings", "Necklace / Pendant", "Bracelet"];

const StepOne = ({ data, updateFormData, onNext }: StepOneProps) => {
  const [errors, setErrors] = useState<StepOneErrors>({});

  const validate = () => {
    const newErrors: StepOneErrors = {};

    const firstNameResult = firstNameSchema.safeParse(data.firstName);
    if (!firstNameResult.success)
      newErrors.firstName = firstNameResult.error.issues[0].message;

    const lastNameResult = lastNameSchema.safeParse(data.lastName);
    if (!lastNameResult.success)
      newErrors.lastName = lastNameResult.error.issues[0].message;

    const emailResult = emailSchema.safeParse(data.email);
    if (!emailResult.success)
      newErrors.email = emailResult.error.issues[0].message;

    if (!data.country) newErrors.country = "Please select a country";
    if (!data.countryCode)
      newErrors.countryCode = "Please select a country code";
    if (!data.phone) newErrors.phone = "Phone number is required";
    if (data.jewelryType.length === 0)
      newErrors.jewelryType = "Please select at least one jewelry type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  const selectClass =
    "w-full rounded-lg border border-placeholder bg-transparent px-3 py-2.5 text-sm text-charcoal outline-none";

  return (
    <div className="space-y-8">
      {/* Section 1 */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-charcoal">
          1. Personal Information
        </h3>

        {/* Country */}
        <div className="space-y-1.5">
          <label className="text-sm text-charcoal">Select Country</label>
          <select
            value={data.country}
            onChange={(e) => updateFormData({ country: e.target.value })}
            className={selectClass}
          >
            <option value="">Select</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-xs text-red-600">{errors.country}</p>
          )}
        </div>

        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            name="firstName"
            value={data.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
            placeholder="Enter first name"
            error={errors.firstName}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={data.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
            placeholder="Enter last name"
            error={errors.lastName}
          />
        </div>

        {/* Country Code + Phone */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-charcoal">Country Code</label>
            <select
              value={data.countryCode}
              onChange={(e) => updateFormData({ countryCode: e.target.value })}
              className={selectClass}
            >
              <option value="">Select</option>
              {countryCodes.map((c) => (
                <option key={c.label} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            {errors.countryCode && (
              <p className="text-xs text-red-600">{errors.countryCode}</p>
            )}
          </div>
          <div className="col-span-2 space-y-1.5">
            <label className="text-sm text-charcoal">Phone Number</label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              placeholder="Enter your number"
              className={selectClass}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 ">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <EmailInput
          label="Email"
          name="email"
          value={data.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="Enter your email address"
          error={errors.email}
        />
      </div>

      {/* Section 2 */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-charcoal">
          2. Type of Jewelry
        </h3>
        <p className="text-sm text-charcoal">
          What type of jewelry are you looking for?
        </p>
        <div className="space-y-2">
          {jewelryTypes.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                name="jewelryType"
                value={type}
                checked={data.jewelryType.includes(type)}
                onChange={() => {
                  const selected = data.jewelryType.includes(type)
                    ? data.jewelryType.filter((t) => t !== type)
                    : [...data.jewelryType, type];
                  updateFormData({ jewelryType: selected });
                }}
                className="accent-burgundy"
              />
              <span className="text-sm text-charcoal">{type}</span>
            </label>
          ))}
        </div>
        {errors.jewelryType && (
          <p className="text-xs text-red-600">{errors.jewelryType}</p>
        )}
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <Button label="Next" onClick={handleNext} size="sm" variant="primary" />
      </div>
    </div>
  );
};

export default StepOne;
