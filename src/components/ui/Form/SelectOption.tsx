interface InputProps {
  value: string;
  label?: string;
  isSelected?: boolean;
  children: React.ReactNode;
}

export default function FormSelect({
  value,
  label,
  isSelected,
  children
}: InputProps) {
  return (
    isSelected
    ?
      <option value={value} selected className="capitalize">
        {
          label 
          ? label
          : children 
        }
      </option>
    :
      <option value={value} className="capitalize">
        {
          label 
          ? label
          : children 
        }
      </option>
  )
}