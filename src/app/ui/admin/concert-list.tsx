"use client";

import ConcertCard from "./concert-card";
import { Concert } from "@/app/lib/definitions";
import { useState } from "react";
import { Card } from "./cards";

interface IConcertListProps {
  concerts: Concert[];
}

export default function ConcertList({ concerts }: IConcertListProps) {
  const [currentConcert, setCurrentConcert] = useState<number>(0);
  return (
    <>
      <div className="flex gap-[35px] mb-10">
        <Card
          title="Total of seats"
          iconPath="/icon/total.svg"
          value={concerts[currentConcert].totalSeats || 0}
          type="total"
        />
        <Card
          title="Reserve"
          iconPath="/icon/reserve.svg"
          value={concerts[currentConcert].reservedSeats || 0}
          type="reserve"
        />
        <Card
          title="Cancel"
          iconPath="/icon/cancel.svg"
          value={concerts[currentConcert].cancelledSeats || 0}
          type="cancel"
        />
      </div>

      <div className="flex flex-col gap-8">
        {concerts.map((concert, idx) => (
          <div key={concert.id} onClick={() => setCurrentConcert(idx)}>
            <ConcertCard
              id={concert.id}
              name={concert.name}
              description={concert.description}
              totalSeats={concert.totalSeats}
            />
          </div>
        ))}
      </div>
    </>
  );
}
