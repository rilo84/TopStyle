import React,{useState} from "react";
import RegisterUser from '../services/RegisterUser';
import "../styles/register.css";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    let user = {
      "firstName": firstName,
      "lastName": lastName,
      "adress": adress,
      "email": email,
      "username": username,
      "password": password
    }
    RegisterUser(user);
  }
  
  return (
    <div className="registerContainer">
      <h1>Registrera nytt konto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mainContent">
          <div className="leftContent">
            <label>Förnamn:</label>
            <input onChange={(e) => setFirstName(e.target.value)} type="text"></input>
            <label>Efternamn:</label>
            <input  onChange={(e) => setLastName(e.target.value)} type="text"></input>
            <label>Adress:</label>
            <input  onChange={(e) => setAdress(e.target.value)}type="text"></input>
          </div>
          <div className="rightContent">
            <label>Email:</label>
            <input  onChange={(e) => setEmail(e.target.value)} type="mail"></input>
            <label>Användarnamn:</label>
            <input  onChange={(e) => setUsername(e.target.value)} type="username"></input>
            <label>Lösenord:</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
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
