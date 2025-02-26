import type { InputType } from "@/types/InputType";

interface InputProps {
  name: string;
  title?: string;
  type: InputType;
  isRequired?: boolean;
  placeholder?: string;
  value?: string | number;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  name,
  title,
  type,
  isDisabled,
  isRequired,
  placeholder,
  value,
  children,
  onChange
}: InputProps) {
  return (
    <div className="flex-1 mb-4">
      <label
        htmlFor={name}
        className="block text-sm dark:text-white font-medium mb-1 capitalize"
      >
        {title ? title : children}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        required={isRequired}
        disabled={isDisabled}
        aria-describedby="helper-text-explanation"
        appearance-none="none"
        step="any"
        onChange={onChange}
        className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
          focus:ring-boston-blue-600 focus:border-boston-blue-600 dark:border-2 dark:border-gray-700 
          dark:text-white flex-1 min-w-[200px] 
            ${isDisabled ? "dark:bg-gray-700/70" : "dark:bg-gray-700/20"}
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
          `}
      />
    </div>
  );
}
