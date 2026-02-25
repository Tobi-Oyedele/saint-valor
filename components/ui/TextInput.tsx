import clsx from "clsx";

type TextInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
};

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}: TextInputProps) => {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm text-charcoal">
        {label}
      </label>

      <div className="relative">
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx(
            "w-full rounded-lg border bg-transparent px-3 py-2.5 pr-10 text-sm outline-none",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-placeholder",
          )}
        />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default TextInput;
