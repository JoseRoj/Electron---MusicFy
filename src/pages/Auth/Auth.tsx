import React from "react";
import { AuthOptions, RegisterForm, LoginForm } from "../../components/Auth";
import { logoNameWhite } from "../../assets";
import "./Auth.scss";

export function Auth() {
  const [typeForm, setTypeForm] = React.useState<
    "options" | "register" | "login" | null
  >(null);

  const onLogin = () => setTypeForm("login");
  const onRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => {
    switch (typeForm) {
      case "login":
        return <LoginForm onRegister={onRegister} goBack={goBack} />;
      case "register":
        return <RegisterForm onLogin={onLogin} goBack={goBack} />;
      default:
        return <AuthOptions onLogin={onLogin} onRegister={onRegister} />;
    }
  };
  return (
    <div className="auth">
      <div className="auth__content">
        <img src={logoNameWhite} alt="Musicfy" className="auth__content-logo" />
        {renderForm()}
      </div>
    </div>
  );
}
