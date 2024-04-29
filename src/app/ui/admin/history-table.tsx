import dayjs from "dayjs";

interface IHistoryTableProps {
  dateTime: Date;
  username: string;
  concertName: string;
  action: "reserve" | "cancel";
}

export default async function HistoryTable({
  dateTime,
  username,
  concertName,
  action,
}: IHistoryTableProps) {
  return (
    <div className="grid grid-cols-4 border border-black divide-black divide-x-2">
      <div className="px-3 py-[10px]">
        {dayjs(dateTime).format("DD/MM/YYYY HH:mm:ss")}
      </div>
      <div className="px-3 py-[10px]">{username}</div>
      <div className="px-3 py-[10px]">{concertName}</div>
      <div className="px-3 py-[10px]">{action}</div>
    </div>
  );
}
