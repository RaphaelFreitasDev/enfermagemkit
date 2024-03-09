import Image from "next/image";

interface LabelProps {
  label: string;
  icon: string;
}

export default function Label({ label, icon }: LabelProps) {
  return (
    <div className="flex justify-start items-center w-full gap-2">
      <Image src={`/icons/${icon}.svg`} alt="sol" width={24} height={24} />
      <span>{label}</span>
    </div>
  );
}
