interface SelectProps {
  defaultOption: string;
  options: string[];
  onChange: (e: string) => void;
}

export default function Select({
  defaultOption,
  options,
  onChange,
}: SelectProps) {
  return (
    <select
      className="w-full p-3 text-black rounded-md"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        {defaultOption}
      </option>
      {options.map((opt) => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
  );
}
