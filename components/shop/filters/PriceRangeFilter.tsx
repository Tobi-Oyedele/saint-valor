"use client";

import { useState } from "react";

interface PriceRangeFilterProps {
  min: string;
  max: string;
  onMinChange: (val: string) => void;
  onMaxChange: (val: string) => void;
}

const PriceRangeFilter = ({
  min,
  max,
  onMinChange,
  onMaxChange,
}: PriceRangeFilterProps) => {
  const [error, setError] = useState("");

  const handleMinChange = (val: string) => {
    if (val && max && Number(val) > Number(max)) {
      setError("Min price cannot exceed max");
    } else {
      setError("");
    }
    onMinChange(val);
  };

  const handleMaxChange = (val: string) => {
    if (min && val && Number(min) > Number(val)) {
      setError("Min price cannot exceed max");
    } else {
      setError("");
    }
    onMaxChange(val);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min"
          value={min}
          onChange={(e) => handleMinChange(e.target.value)}
          className="w-full border border-border rounded px-2 py-1.5 text-xs text-charcoal outline-none focus:border-gold transition"
        />
        <span className="text-xs text-secondary">—</span>
        <input
          type="number"
          placeholder="Max"
          value={max}
          onChange={(e) => handleMaxChange(e.target.value)}
          className="w-full border border-border rounded px-2 py-1.5 text-xs text-charcoal outline-none focus:border-gold transition"
        />
      </div>
      {error && <p className="text-xs text-burgundy">{error}</p>}
    </div>
  );
};

export default PriceRangeFilter;
