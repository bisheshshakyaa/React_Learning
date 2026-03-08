import { useState } from "react";
import { LoginUI } from "./components/LoginUI";
import { StaticBtn } from "./components/StaticsBtn";
import "./App.css";

export default function App() {
  const [btnStatus, setBtnStatus] = useState(false); // Available For all
  const [showPassword, setShowPassword] = useState(false); // State's for Passwords

  return (
    <>
      <LoginUI showPassword={showPassword} setShowPassword={setShowPassword} />

      <StaticBtn btnStatus={btnStatus} setBtnStatus={setBtnStatus} />
    </>
  );
}
