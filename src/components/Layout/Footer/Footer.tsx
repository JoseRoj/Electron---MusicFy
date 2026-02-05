import React from "react";
import { defaultAvatar } from "../../../assets";
import { FaVolumeHigh } from "react-icons/fa6";
import { Player } from "../../shared";
interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="flex h-full w-full px-2.5 justify-between items-center">
      <div className="flex w-[20%] items-center">
        <img src={undefined} className="w-12 h-12 mr-2.5"></img>
        <p> Song Name </p>
      </div>

      <div className="w-[60%] text-center">
        <Player></Player>
      </div>

      <div className="w-[20%] flex items-center justify-center gap-2">
        <FaVolumeHigh></FaVolumeHigh>
        <input type="range" className="range-input" min="0" max="100"></input>
      </div>
    </div>
  );
};
