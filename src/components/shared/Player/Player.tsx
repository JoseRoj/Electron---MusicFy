import React, { useState } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

export const Player = () => {
  const [isPlay, setIsPlasy] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col items-center gap-2">
      {isPlay ? <FaPlayCircle /> : <FaPauseCircle />}
      <div className="w-full h-2 bg-zinc-800 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full transition-all"
          style={{ width: "30%" }}
        />
      </div>
    </div>
  );
};
