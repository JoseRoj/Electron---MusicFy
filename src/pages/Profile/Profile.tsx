import React from "react";
import { User } from "../../api";
import { Button } from "../../components/shared";
import { AvatarUpdate } from "../../components/Profile";
const userController: User | null = new User();
export function Profile() {
  const user = userController?.getMe();

  return (
    <div className="mx-4">
      <h2> Configuracion </h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div>
            <AvatarUpdate />
            <p> {user?.displayName} </p>
          </div>
          <Button
            className="bg-white hover:bg-secondary-hover text-black!  font-semibold! py-0! text-xs"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            text={"Actualizar"}
          ></Button>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs"> Email : {user?.email} </span>
          <Button
            className="bg-white hover:bg-secondary-hover text-black!  font-semibold! py-0! text-xs"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            text={"Actualizar"}
          ></Button>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs"> Contrasena : ************ </span>
          <Button
            className="bg-white hover:bg-secondary-hover text-black!  font-semibold! py-0! text-xs"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            text={"Actualizar"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
