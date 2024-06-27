import axios from "axios";
import { useEffect, useState } from "react";

const useGetCrypto = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
      try {
        const response = await axios.get(url);
        setCryptoData(response.data);
        console.log(response.data);
      } catch (e) {
        console.error("Error fetching crypto data:", e.message);
      }
    };

    fetchData();
  }, []);

  return { cryptoData };
};

export default useGetCrypto;
