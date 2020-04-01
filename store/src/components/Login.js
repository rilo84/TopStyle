import React, {useState} from "react";
import LoginUser from '../services/LoginUser';
import "../styles/login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) =>{
    e.preventDefault();
    LoginUser(username,password);
  }

  return (
    <div className="loginContainer">
      <div className="loginCard">
      <form onSubmit={loginUser}>
          <label htmlFor="username">Användarnamn:</label>
          <input id="username" onChange={(e) => setUserName(e.target.value)} type="text" required="required" pattern=".{4,}" title="Ange minst 4 tecken"/>
          <label htmlFor="password">Lösenord:</label>
          <input  id="password" onChange={(e) => setPassword(e.target.value)} type="password" required="required" pattern=".{6,}" title="Ange minst 6 tecken" />
          <button type="submit">Logga in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
