import ShowPassword from "../assets/eye.png";
import HidePassword from "../assets/hide.png";
import "../css/Login.css";

// LoginUI Component
export function LoginUI({ showPassword, setShowPassword }) {
  function ShowPass() {
    // Updater Function
    setShowPassword(!showPassword);
  }

  return (
    <div className="LoginContainer">
      <h1>Hello, welcome To my website </h1>
      <input placeholder="Email" type="email" className="InputHolder" />
      <div className="sideTo">
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"} // Text le shows normal as it says if the showPassword true bhaye chai text natra password format ma convert garne
          className="InputHolder"
        />
        <button className="StaticBtn-3" onClick={ShowPass}>
          {showPassword === false ? (
            <img src={ShowPassword} className="imgContainer" />
          ) : (
            <img src={HidePassword} className="imgContainer" />
          )}
        </button>
      </div>

      <div className="Btn-group">
        <button className="StaticBtn">Login </button>
        <button className="StaticBtn"> SignUp </button>
      </div>
    </div>
  );
}
