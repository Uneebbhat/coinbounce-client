import axios from "axios";
import { useEffect, useState } from "react";

const useGetCrypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
      try {
        const response = await axios.get(url);
        setCryptoData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching crypto data:", e.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cryptoData, loading };
};

export default useGetCrypto;
