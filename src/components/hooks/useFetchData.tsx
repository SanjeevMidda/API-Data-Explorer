import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(url);
      let datafromAPI = await response.json();
      setData(datafromAPI);
      console.log(datafromAPI);
    };

    getData();
  }, []);
  return;
};

export default useFetchData;
