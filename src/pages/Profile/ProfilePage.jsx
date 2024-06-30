import useAuthStore from "@/context/useAuthStore";
import useGetProfile from "@/hooks/useGetProfile";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const { token } = useAuthStore();
  console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/profile/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(result.data.data);
        setProfile(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <div className="profile-wrapper">
        <div className="profile-pic">
          <img
            src={profile.profilePic}
            alt=""
            className="w-40 h-40 overflow-hidden rounded-full"
          />
        </div>
        <h2>Name: {profile.name}</h2>
      </div>
    </>
  );
};

export default ProfilePage;
