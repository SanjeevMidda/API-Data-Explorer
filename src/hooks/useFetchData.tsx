import { useEffect, useState, useCallback } from "react";
import { APIData } from "../types/APIData";
import { Status } from "../types/status";

const useFetchData = (url: string) => {
  const [data, setData] = useState<APIData[] | null>(null);
  const [appStatus, setAppStatus] = useState<Status>("loading");
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (signal?: AbortSignal) => {
      setError(null);
      setAppStatus("loading");
      try {
        let response = await fetch(url, { signal });

        if (!response.ok) throw new Error("Request failed");

        let dataFromAPI = await response.json();
        setData(dataFromAPI);
        setAppStatus("success");
      } catch (error: any) {
        if (error.name === "AbortError") return;
        setAppStatus("error");

        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error occurred");
        }
      }
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();

    fetchData(controller.signal);

    return () => controller.abort();
  }, []);
  return { data, appStatus, refetch: fetchData };
};

export default useFetchData;
