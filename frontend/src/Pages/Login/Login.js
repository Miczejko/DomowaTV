import { useState } from "react";
import axios from "axios";
const Login = () => {

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const emailLoginHandler = (e) => {
    setEmailLogin(e.target.value);
  }

  const passwordLoginHandler = (e) => {
    setPasswordLogin(e.target.value);
  }


  const login = (e) => {
    e.preventDefault();

    const myData = {
      email: emailLogin,
      password: passwordLogin
    }

    axios.post("http://localhost:5000/login", myData, {
      withCredentials: true
    })
      .then(res => {
        console.log(res.data);
        if (res.data) {
          localStorage.setItem("accessToken", res.data.accessToken);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>

      <div>Login</div>

      <form onSubmit={login}>
        <input onChange={emailLoginHandler} placeholder="email"></input>
        <input onChange={passwordLoginHandler} placeholder="password"></input>
        <input type="submit"></input>
      </form>

    </div>
  );
}

export default Login;
