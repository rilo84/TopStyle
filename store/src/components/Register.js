import React from "react";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="registerContainer">
      <h1>Registrera nytt konto</h1>
      <form>
        <div className="mainContent">
          <div className="leftContent">
            <label>Förnamn:</label>
            <input type="text"></input>
            <label>Efternamn:</label>
            <input type="text"></input>
            <label>Adress:</label>
            <input type="text"></input>
          </div>
          <div className="rightContent">
            <label>Email:</label>
            <input type="mail"></input>
            <label>Användarnamn:</label>
            <input type="username"></input>
            <label>Lösenord:</label>
            <input type="password"></input>
          </div>
        </div>
        <div className="buttonContainer">
            <button type="submit">Registrera</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
