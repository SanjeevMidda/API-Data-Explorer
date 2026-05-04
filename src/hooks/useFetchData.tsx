import { useEffect, useState, useCallback } from "react";
import { APIData } from "../types/APIData";
import { Status } from "../types/status";

const useFetchData = (url: string) => {
  const [data, setData] = useState<APIData[] | null>(null);
  const [appStatus, setAppStatus] = useState<Status>("loading");

  const getData = useCallback(async () => {
    setAppStatus("loading");
    try {
      let response = await fetch(url);

      if (!response.ok) throw new Error("Request failed");

      let dataFromAPI = await response.json();
      setData(dataFromAPI);
      setAppStatus("success");
    } catch (error) {
      console.log(error);
      setAppStatus("error");
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [url]);
  return { data, appStatus, setData, refetch: getData };
};

export default useFetchData;
