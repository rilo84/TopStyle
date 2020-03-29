import React, {useState} from "react";
import LoginUser from '../services/LoginUser';
import "../styles/login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () =>{
    LoginUser(username,password);
  }

  return (
    <div className="loginContainer">
      <div className="loginCard">
          <label htmlFor="username">Användarnamn:</label>
          <input id="username" onChange={(e) => setUserName(e.target.value)} type="text" />
          <label htmlFor="password">Lösenord:</label>
          <input  id="password" onChange={(e) => setPassword(e.target.value)} type="password" />
          <button onClick={loginUser}>Logga in</button>
      </div>
    </div>
  );
};

export default Login;
