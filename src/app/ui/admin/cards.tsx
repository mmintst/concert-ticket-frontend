import Image from "next/image";

export function Card() {
  return (
    <div className="rounded-lg text-white py-6 px-4 gap-[10px] bg-[#0070A4] w-[350px] h-[234px] flex flex-col justify-center items-center">
      <Image src="/icon/total.svg" width={40} height={40} alt="" />
      <div className="text-2xl">title</div>
      <div className="text-[60px]">value</div>
    </div>
  );
}
