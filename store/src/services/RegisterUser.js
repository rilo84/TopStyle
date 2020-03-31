import LoginUser from "./LoginUser";

const RegisterUser = (user) => {
    let uri = "http://localhost:3001/api/user/register";
  
    fetch(uri, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      LoginUser(user.username, user.password);
    });
  };
  
export default RegisterUser;