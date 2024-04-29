"use client";

import { createConcert } from "@/app/lib/action";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function CreateConcert() {
  const [concertName, setConcertName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [totalSeats, setTotalSeats] = useState<number>(1);

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await createConcert({ name: concertName, description, totalSeats });

      window.location.reload();
    } catch (err) {
      if (err instanceof Error) console.log(err);
    }
  };
  return (
    <div className="flex flex-col p-10 w-[1120px] border-2 rounded-lg gap-3">
      <h1 className="font-bold text-[#1692EC] text-[40px]">Create</h1>
      <hr />
      <form className="flex flex-col gap-6 w-full" onSubmit={handleCreate}>
        <div className="flex flex-grow gap-6">
          <div className="flex flex-col gap-4">
            <label>Concert name</label>
            <input
              className="w-full border border-[#5C5C5C] rounded py-3 px-4"
              onChange={(e) => setConcertName(e.target.value)}
              value={concertName}
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label>Total of seats</label>
            <input
              className="w-full border border-[#5C5C5C] rounded py-3 px-4"
              onChange={(e) => setTotalSeats(Number(e.target.value))}
              value={totalSeats}
              type="number"
              min={1}
              required
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <input
            className="w-full border border-[#5C5C5C] rounded py-3 px-4"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            required
          />
        </div>
        <div className="text-white">
          <button
            className="bg-[#1692EC] flex gap-1 py-3 px-[37px] rounded"
            type="submit"
          >
            <Image
              src="/icon/save.svg"
              width={24}
              height={24}
              alt="save-icon"
            />
            <p>Save</p>
          </button>
        </div>
      </form>
    </div>
  );
}
