export type Concert = {
  id: number;
  name: string;
  description: string;
  totalSeats: number;
  reservedSeats: number;
  cancelledSeats: number;
};

export type History = {
  id: number;
  dateTime: Date;
  username: string;
  concertName: string;
  action: "reserve" | "cancel";
};

export type CreateConcertDto = Omit<
  Concert,
  "id" | "reservedSeats" | "cancelledSeats"
>;
export type ConcertActionDto = {
  action: "reserve" | "cancel";
};
