import { useQuery } from "react-query";

interface Options {
  method: string;
  params: any;
  headers: object;
}

async function fetchData(url: string) {
  const result = await fetch(url);
  const json = await result.json();
  return json;
}

export function GetLeagues(url: string) {
  return useQuery(["leagues"], fetchData(url));
}
