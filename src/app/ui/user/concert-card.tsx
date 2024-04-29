import { updateConcert } from "@/app/lib/action";
import { ConcertActionDto } from "@/app/lib/definitions";
import Image from "next/image";
import { useState } from "react";

interface IConcertProps {
  id: number;
  name: string;
  description: string;
  totalSeats: number;
}

export default function ConcertCard({
  name,
  description,
  totalSeats,
  id,
}: IConcertProps) {
  const [isReserved, setIsReserved] = useState<boolean>(false);
  const handleReserve = async () => {
    try {
      await updateConcert(id, { action: "reserve" });
      setIsReserved(true);
    } catch (err) {
      if (err instanceof Error) console.log(err);
    }
  };
  const handleCancle = async () => {
    try {
      await updateConcert(id, { action: "cancel" });
      setIsReserved(false);
    } catch (err) {
      if (err instanceof Error) console.log(err);
    }
  };
  return (
    <>
      <div className="flex flex-col p-10 w-[1120px] border-2 rounded-lg gap-3">
        <h1 className="font-bold text-[32px] text-[#1692EC]">{name}</h1>
        <hr />
        <div className="text-2xl">{description}</div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <Image
              src="/icon/totalblack.svg"
              width={32}
              height={32}
              alt="total seats"
            />
            <div className="text-2xl">{totalSeats}</div>
          </div>
          {isReserved ? (
            <button
              className="text-2xl bg-[#E84E4E] text-white py-3 px-4 rounded"
              onClick={handleCancle}
            >
              Cancle
            </button>
          ) : (
            <button
              className="text-2xl bg-[#1692EC] text-white py-3 px-4 rounded"
              onClick={handleReserve}
            >
              Reserve
            </button>
          )}
        </div>
      </div>
    </>
  );
}
