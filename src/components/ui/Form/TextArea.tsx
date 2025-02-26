interface InputProps {
  name: string;
  title?: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string | number;
  isDisabled?: boolean;
  rows: number;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  name,
  title,
  isDisabled,
  isRequired,
  placeholder,
  value,
  rows,
  children,
  onChange,
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
      <textarea
        id={name}
        className={`resize-none p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-boston-blue-600 focus:border-boston-blue-600 dark:border-2 dark:border-gray-700 dark:text-white min-w-[420px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
            ${isDisabled ? "dark:bg-gray-700/70" : "dark:bg-gray-700/20"}
        `}
        rows={rows}
        name={name}
        placeholder={placeholder}
        value={value}
        required={isRequired}
        disabled={isDisabled}
        aria-describedby="helper-text-explanation"
        appearance-none="none"
        onChange={onChange}
      />
    </div>
  );
}
