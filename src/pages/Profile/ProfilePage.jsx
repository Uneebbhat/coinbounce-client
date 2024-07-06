import useAuthStore from "@/context/useAuthStore";
import useChangeTitle from "@/hooks/useChangeTitle";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import comingSoon from "@/assets/coming-soon.png";

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [myBlogs, setMyBlogs] = useState([]);
  const { token } = useAuthStore();

  useChangeTitle("Coinbounce | See your profile");

  useEffect(() => {
    const fetchProfile = async () => {
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
    fetchProfile();
  }, [id, token]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogResult = await axios.get(
          `http://localhost:5000/api/profile/${id}/blogs`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(blogResult.data.data);
        setMyBlogs(blogResult.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, [id, token]);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="profile-wrapper flex flex-col items-center">
        <div className="profile-pic mt-4">
          <img
            src={profile.profilePic}
            alt=""
            className="w-40 h-40 overflow-hidden rounded-full"
          />
        </div>
        <div className="profile-info mt-2">
          <h2 className="text-3xl font-semibold">{profile.name}</h2>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="tab-wrapper">
          <Tabs
            defaultValue="my-blogs"
            className="block w-[100vw] max-w-full mx-auto"
          >
            <div className="tabs-list flex flex-col w-[100%] items-center">
              <TabsList>
                <TabsTrigger value="my-blogs">My Blogs</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="my-blogs" className="ml-8 mr-8">
              {myBlogs.length > 0 ? (
                myBlogs.map((myBlog) => (
                  <Link to={`/get-blog/${myBlog._id}`} key={myBlog._id}>
                    <h2 className="md:text-4xl text-xl font-bold text-gray-900">
                      {myBlog.blogTitle}
                    </h2>
                    <p className="text-gray-800 blog-content">
                      {myBlog.blogDesc}
                    </p>
                  </Link>
                ))
              ) : (
                <p>No blogs available.</p>
              )}
            </TabsContent>
            <TabsContent value="saved" className="flex flex-col items-center">
              <h2 className="text-center mt-4 md:text-4xl text-2xl font-bold">
                Coming Soon
              </h2>
              <img src={comingSoon} width={180} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
