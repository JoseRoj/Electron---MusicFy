import React, { useRef, useState } from "react";
import { InputForm } from "../../shared";
import { FaEye, FaRegUserCircle, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { Auth } from "../../../api/auth";

interface RegisterFormProps {
  onLogin: () => void;
  goBack: () => void;
}
const auth = new Auth();

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onLogin,
  goBack,
}) => {
  // Handle form submission
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const email = inputRefUser.current?.value || "";
    const password = inputRefPassword.current?.value || "";

    try {
      await auth.register(email, password);
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputRefEmail = useRef<HTMLInputElement>(null);
  const inputRefPassword = useRef<HTMLInputElement>(null);
  const inputRefUser = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1 className="text-center mt-4 font-bold">
        Empieza a escuchar con una cuenta de Musicfy{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        <InputForm
          ref={inputRefUser}
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
        <InputForm
          ref={inputRefEmail}
          placeholder="Nombre de usuario"
          onChange={() => {}}
          icon={<FaRegUserCircle />}
        />
        <div className="flex w-full justify-center mt-4">
          <button className="button-form " type="submit" value="Submit">
            {loading ? "Cargando..." : "Continuar"}
          </button>
        </div>
      </form>

      <div className="text-center uppercase text-xs font-bold">
        <p onClick={goBack} className=" text-xs my-10 cursor-pointer">
          Volver{" "}
        </p>
        <p className="text-gray-500">
          ¿Ya tienes Musicfy?
          <span
            className="text-blue-500 cursor-pointer ml-1 underline"
            onClick={onLogin}
          >
            Iniciar sesión
          </span>
        </p>
      </div>
    </div>
  );
};
