import axios, { AxiosError } from "axios";
import { ConcertActionDto, CreateConcertDto } from "./definitions";

// for admin
export async function createConcert(createConcertDto: CreateConcertDto) {
  try {
    await axios.post("http://localhost:3000/concerts/", createConcertDto);
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err.response?.data.message);
  }
}

export async function removeConcert(id: number) {
  try {
    await axios.delete(`http://localhost:3000/concerts/${id}`);
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err.response?.data.message);
  }
}

// for user
export async function updateConcert(
  id: number,
  concertActionDto: ConcertActionDto
) {
  try {
    await axios.patch(`http://localhost:3000/concerts/${id}`, concertActionDto);
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err.response?.data.message);
  }
}
