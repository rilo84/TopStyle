const GetUser = async () => {
  let uri = "http://localhost:3001/api/user";
  let token = localStorage.getItem("token");
  let result;

  await fetch(uri, {
    method: "GET",
    headers: {
      token: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => result = res.json())

    return result;
};


export default GetUser;
