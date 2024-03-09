interface inputProps {
  type: string;
  onChange: (e: string) => void;
}

export default function Input({ type, onChange }: inputProps) {
  return (
    <input
      type={type}
      className="w-full p-3 text-black rounded-md"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
