const LoginUser = (username, password) => {
  let uri = "http://localhost:3001/api/user/login";

  fetch(uri, {
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    localStorage.setItem('token', data.token);
    window.location.href = "../mypage";
  }).catch(err => alert("Felaktigt användarnamn eller lösenord"));
};

export default LoginUser;
