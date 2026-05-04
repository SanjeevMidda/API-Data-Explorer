import { useEffect } from "react";

const useFetchData = (url: string) => {
  useEffect(() => {
    const getData = async () => {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    };

    getData();
  }, []);
  return;
};

export default useFetchData;
