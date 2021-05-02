import axios from "axios";
import { useEffect, useState } from "react";

const useFetchSongs = (url) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://shazam.p.rapidapi.com/charts/track",
        params: { locale: "en-US", pageSize: "20", startFrom: "0" },
        headers: {
          "x-rapidapi-key":
            "ff177f569cmshba95bc6f96fee55p117b98jsn3718c1f2300f",
          "x-rapidapi-host": "shazam.p.rapidapi.com",
        },
      };
      try {
        const pulledSongs = await (await axios.request(options)).data;

        setSongs(pulledSongs.tracks);
        setIsLoading(false);
      } catch (e) {
        throw e;
      }
    };
    fetchData();
  }, []);
  return { isLoading, songs };
};
export default useFetchSongs;
