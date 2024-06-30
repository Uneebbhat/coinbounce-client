import useAuthStore from "@/context/useAuthStore";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetProfile = (id) => {
  const [profile, setProfile] = useState(null);
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/profile/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setProfile(null);
      }
    };

    fetchData();
  }, [id]);

  return { profile };
};

export default useGetProfile;
