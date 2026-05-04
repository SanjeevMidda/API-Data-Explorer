import { useEffect, useState } from "react";
import { APIData } from "../types/APIData";
import { Status } from "../types/status";

const useFetchData = (url: string) => {
  const [data, setData] = useState<APIData[] | null>(null);
  const [appStatus, setAppStatus] = useState<Status>("loading");

  const getData = async () => {
    setAppStatus("loading");
    try {
      let response = await fetch(url);
      let datafromAPI = await response.json();
      setData(datafromAPI);
      setAppStatus("success");
      console.log(datafromAPI);
    } catch (error) {
      console.log(error);
      setAppStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { data, appStatus };
};

export default useFetchData;
