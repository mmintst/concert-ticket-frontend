import clsx from "clsx";
import Image from "next/image";

interface ICardProps {
  title: string;
  iconPath: string;
  value: number;
  type: "total" | "reserve" | "cancel";
}

export function Card({ title, iconPath, value, type }: ICardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg text-white py-6 px-4 gap-[10px] w-[350px] h-[234px] flex flex-col justify-center items-center",
        { "bg-[#0070A4]": type === "total" },
        { "bg-[#00A58B]": type === "reserve" },
        { "bg-[#E84E4E]": type === "cancel" }
      )}
    >
      <Image src={iconPath} width={40} height={40} alt="" />
      <div className="text-2xl">{title}</div>
      <div className="text-[60px]">{value}</div>
    </div>
  );
}
