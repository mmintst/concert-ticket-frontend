import axios, { AxiosError } from "axios";
import { Concert, History } from "./definitions";

export async function fetchConcerts() {
  try {
    const res = await axios.get<Concert[]>("http://localhost:3000/concerts/");

    return { concerts: res.data };
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err.response?.data.message);
  }
}

export async function fetchConcert(id: number) {
  try {
    const res = await axios.get<Concert>(
      `http://localhost:3000/concerts/${id}`
    );
    const concert = res.data;

    return { concert };
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err.response?.data.message);
  }
}

export async function fetchHistory() {
  try {
    const res = await axios.get<History[]>("http://localhost:3000/history/");
    const history = res.data;

    return { history };
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err.response?.data.message);
  }
}
