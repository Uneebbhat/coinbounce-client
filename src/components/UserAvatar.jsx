import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useParams } from "react-router-dom";
import useAuthStore from "@/context/useAuthStore";
import useGetProfile from "@/hooks/useGetProfile";

const UserAvatar = () => {
  const { profilePic, clearToken, getId } = useAuthStore();
  const id = getId();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={profilePic} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={`/profile/${id}`}>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <Link to={`/profile/edit/${id}`}>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => clearToken()}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserAvatar;
