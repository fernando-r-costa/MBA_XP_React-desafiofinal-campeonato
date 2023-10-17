import { read } from "./httpService";

export async function apiGetAllData(ano) {
  const allData = await read(ano);
  return allData;
}
