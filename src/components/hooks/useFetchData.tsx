import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(url);
        let datafromAPI = await response.json();
        setData(datafromAPI);
        console.log(datafromAPI);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return;
};

export default useFetchData;
