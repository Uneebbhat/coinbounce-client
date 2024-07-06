import useAuthStore from "@/context/useAuthStore";
import useChangeTitle from "@/hooks/useChangeTitle";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import comingSoon from "@/assets/coming-soon.png";
import empty from "@/assets/empty.png";
import { Button } from "@/components/ui/button";

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
          <Tabs defaultValue="my-blogs" className="block max-w-full mx-auto">
            <div className="tabs-list flex flex-col w-[800px] mx-auto items-center">
              <TabsList>
                <TabsTrigger value="my-blogs">My Blogs</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="my-blogs" className="ml-8 mr-8">
              {myBlogs.length > 0 ? (
                myBlogs.map((myBlog) => (
                  <Link to={`/blog/${myBlog._id}`} key={myBlog._id}>
                    <h2 className="md:text-4xl text-xl font-bold text-gray-900">
                      {myBlog.blogTitle}
                    </h2>
                    <p className="text-gray-800 blog-content">
                      {myBlog.blogDesc}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="flex flex-col items-center">
                  <h2 className="text-center mt-4 md:text-4xl text-2xl font-bold mb-4">
                    No blogs to show
                  </h2>
                  <img src={empty} width={150} />
                  <Link to="/create-blog">
                    <Button>Upload your blog</Button>
                  </Link>
                </div>
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
