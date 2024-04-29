"use client";

import ConcertCard from "./concert-card";
import { Concert } from "@/app/lib/definitions";

interface IConcertListProps {
  concerts: Concert[];
}

export default function ConcertList({ concerts }: IConcertListProps) {
  return (
    <>
      <div className="flex flex-col gap-8">
        {concerts.map((concert) => (
          <div key={concert.id}>
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
