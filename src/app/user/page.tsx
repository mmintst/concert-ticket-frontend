import { fetchConcerts } from "../lib/data";
import ConcertList from "../ui/user/concert-list";

export default async function Page() {
  const data = await fetchConcerts();

  return (
    <main>
      {data ? <ConcertList concerts={data.concerts} /> : <div>no data</div>}
    </main>
  );
}
