const LoginUser = (user) => {
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
      console.log(data);
      localStorage.setItem('token', data.token);
      window.location.href = "../mypage";
    });
  };
  
  export default LoginUser;