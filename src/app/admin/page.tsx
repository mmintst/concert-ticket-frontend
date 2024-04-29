import { fetchConcerts } from "../lib/data";
import ConcertList from "../ui/admin/concert-list";
import CreateConcert from "../ui/admin/create";

export default async function Page() {
  const data = await fetchConcerts();
  return (
    <>
      {data ? <ConcertList concerts={data.concerts} /> : <div>no data</div>}
      <CreateConcert />
    </>
  );
}
