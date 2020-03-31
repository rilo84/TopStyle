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
    console.log("Loggade In")
    localStorage.setItem('token', data.token);
  });
};

export default LoginUser;
