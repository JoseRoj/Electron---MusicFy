import React from "react";
import { Button } from "../../shared/Button";
import "./AuthOptions.scss";

interface AuthOptionsProps {
  onLogin: () => void;
  onRegister: () => void;
}

export const AuthOptions: React.FC<AuthOptionsProps> = ({
  onLogin,
  onRegister,
}) => {
  return (
    <div>
      <h1 className="my-12.5 text-3xl font-bold text-center">
        {" "}
        Millones de Canciones en Musicfy
      </h1>
      <Button
        variant="primary"
        text="Registrate Gratis"
        onClick={onRegister}
        className="button-register font-bold!"
      />
      <Button
        variant="primary"
        text="Iniciar Sesión"
        onClick={onLogin}
        className="button-login bg-white hover:bg-secondary-hover font-bold! text-black!"
      />
    </div>
  );
};
