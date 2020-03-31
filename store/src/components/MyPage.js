import React, {useState, useEffect} from "react";
import GetUser from "../repo/GetUser";

const MyPage = () => {
  const [user, setUser] = useState({});

  useEffect(()=>{
    const fetch = async () => {
        let userData = await GetUser();
        console.log(userData);
        setUser(userData);
    }
    fetch();
  },[]);

  return <h1>Välkommen {user.firstName} {user.lastName}</h1>;
};

export default MyPage;
