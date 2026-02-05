import React, { useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { InputForm } from "../../shared";
import { Auth } from "../../../api/auth";

interface LoginFormProps {
  onRegister: () => void;
  goBack: () => void;
}
const auth = new Auth();

export const LoginForm: React.FC<LoginFormProps> = ({ onRegister, goBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const inputRefPassword = useRef<HTMLInputElement>(null);

  const onShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const email = inputRefEmail.current?.value || "";
    const password = inputRefPassword.current?.value || "";

    try {
      await auth.login(email, password);
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-center my-4"> Musica para todos </h1>
      <form onSubmit={handleSubmit}>
        <InputForm
          ref={inputRefEmail}
          placeholder="Correo electrónico"
          onChange={() => {}}
          icon={<MdOutlineMailLock />}
        />
        <InputForm
          ref={inputRefPassword}
          placeholder="Contraseña"
          onChange={() => {}}
          icon={
            showPassword ? (
              <FaEyeSlash
                onClick={onShowPasswordToggle}
                className="cursor-pointer"
              />
            ) : (
              <FaEye onClick={onShowPasswordToggle} />
            )
          }
          type={showPassword ? "text" : "password"}
        />

        <div className="flex w-full justify-center mt-4">
          <button className="button-form " type="submit" value="Submit">
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </div>
      </form>
      <div className="text-center uppercase text-xs font-bold">
        <p onClick={goBack} className=" text-xs my-10 cursor-pointer">
          Volver{" "}
        </p>
        <p className="text-gray-500">
          ¿No tienes cuenta?
          <span
            className="text-blue-500 cursor-pointer ml-1 underline"
            onClick={onRegister}
          >
            Registrarse
          </span>
        </p>
      </div>
    </div>
  );
};
