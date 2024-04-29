import { removeConcert } from "@/app/lib/action";
import Image from "next/image";

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
  const handleRemove = async () => {
    try {
      await removeConcert(id);

      window.location.reload();
    } catch (err) {
      if (err instanceof Error) console.log(err);
    }
  };
  return (
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
        <button
          className="text-2xl bg-[#E84E4E] text-white py-3 px-4 rounded flex gap-1"
          onClick={handleRemove}
        >
          <Image src="/icon/delete.svg" width={32} height={32} alt="delete" />
          Delete
        </button>
      </div>
    </div>
  );
}
