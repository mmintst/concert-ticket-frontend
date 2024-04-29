import { fetchHistory } from "@/app/lib/data";
import HistoryTable from "@/app/ui/admin/history-table";

export default async function Page() {
  const data = await fetchHistory();
  if (!data) {
    return <div>no data</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-4 border border-black divide-black divide-x-2 font-bold">
        <div className="px-3 py-[10px]">Date time</div>
        <div className="px-3 py-[10px]">Username</div>
        <div className="px-3 py-[10px]">Concert name</div>
        <div className="px-3 py-[10px]">action</div>
      </div>
      {data.history.map((history) => (
        <HistoryTable
          key={history.id}
          dateTime={history.dateTime}
          username={history.username}
          concertName={history.concertName}
          action={history.action}
        />
      ))}
    </div>
  );
}
