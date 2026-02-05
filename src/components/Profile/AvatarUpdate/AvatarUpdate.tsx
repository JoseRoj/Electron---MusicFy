import React, { useState, useCallback } from "react";
import { User } from "../../../api";
import { defaultAvatar } from "../../../assets";
import { useDropzone } from "react-dropzone";

const userController = new User();

export const AvatarUpdate = () => {
  const user = userController.getMe();
  const [avatarURL, setAvatarURL] = useState(user?.photoURL || defaultAvatar);

  const onDrop = useCallback(async (acceptedFile: any) => {
    const file = acceptedFile[0];
    setAvatarURL(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="flex items-center justify-center" {...getRootProps()}>
      <input {...getInputProps()}></input>
      <img src={avatarURL} className="border rounded-full w-25 h-25"></img>
    </div>
  );
};
