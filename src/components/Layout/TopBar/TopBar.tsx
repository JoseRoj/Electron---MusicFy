import React from "react";
import { IoIosArrowBack, IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Auth, User } from "../../../api";
import { defaultAvatar } from "../../../assets";
const auth = new Auth();
const user = new User();

interface TopBarProps {}

export const TopBar: React.FC<TopBarProps> = () => {
  const navigation = useNavigate();
  const userData = user.getMe();

  const displayName = userData?.displayName || "Mi Cuenta";
  const avatar = userData?.photoURL || defaultAvatar;

  const goBack = () => {
    navigation(-1);
  };

  return (
    <div className="flex items-center justify-between w-full h-full px-1.25 text-xs">
      <IoIosArrowBack onClick={goBack} className="cursor-pointer" />
      <div className="flex items-center justify-center gap-2">
        <Link to={"/Profile"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={avatar} alt="Avatar" className="w-5 h-5 rounded-full" />
            <p>{displayName}</p>
          </div>
        </Link>
        <IoMdLogOut
          onClick={auth.logout}
          className="cursor-pointer"
        ></IoMdLogOut>
      </div>
    </div>
  );
};
