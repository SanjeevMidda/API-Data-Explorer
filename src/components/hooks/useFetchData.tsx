import { useEffect, useState } from "react";

type status = "loading" | "error" | "success";

const useFetchData = (url: string) => {
  const [data, setData] = useState(null);
  const [appStatus, setAppStatus] = useState<status>("loading");

  useEffect(() => {
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

    getData();
  }, []);
  return { data, appStatus };
};

export default useFetchData;
