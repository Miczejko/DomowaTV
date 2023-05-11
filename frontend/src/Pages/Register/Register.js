import { useState } from "react";
import axios from "axios";
const Register = () =>  {

  const [usernameRegister, setUsernameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const usernameRegisterHandler = (e) => {
    setUsernameRegister(e.target.value);
  }

  const emailRegisterHandler = (e) => {
    setEmailRegister(e.target.value);
  }

  const passwordRegisterHandler = (e) => {
    setPasswordRegister(e.target.value);
  }

  const register = (e) => {
    e.preventDefault();

    const myData = {
      username: usernameRegister,
      email: emailRegister,
      password: passwordRegister
    }

    axios.post("http://localhost:5000/register", myData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })

  }

  return (
    <div>

      <div>Register</div>

      <form onSubmit={register}>
        <input onChange={usernameRegisterHandler} placeholder="username"></input>
        <input onChange={emailRegisterHandler} placeholder="email"></input>
        <input onChange={passwordRegisterHandler} placeholder="password"></input>
        <input type="submit"></input>
      </form>

    </div>
  );
}

export default Register;
