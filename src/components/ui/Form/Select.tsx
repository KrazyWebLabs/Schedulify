interface InputProps {
  name: string;
  title?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormSelect({
  name,
  title,
  isDisabled,
  isRequired,
  children,
  onChange
}: InputProps) {
  return (
    <div className="flex-1 min-w-[200px] mb-4">
      <label
        htmlFor={name}
        className="block text-sm dark:text-white font-medium mb-1 capitalize"
      >
        {title ? title : children}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>

      <select
        id={name}
        name={name}
        required={isRequired}
        disabled={isDisabled}
        onChange={onChange}
        className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
          focus:ring-LegacyBlue-600 focus:border-LegacyBlue-600 dark:border-2 dark:border-gray-700 
          dark:text-white ${
            isDisabled ? "dark:bg-gray-700/70" : "dark:bg-gray-700/20"
          }`}
      >
        {children}
      </select>
    </div>
  )
}