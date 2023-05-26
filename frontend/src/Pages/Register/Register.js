import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

// ICONS
import { RiLockPasswordLine, RiUser3Line } from "react-icons/ri";
import { MdOutlineMail } from 'react-icons/md'

const Register = () => {

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

    <div className="flex flex-col  justify-center items-center">



      <form className='bg-white shadow-2xl rounded-md  w-1/4 flex flex-col items-center' onSubmit={register}>
        <div className="w-full bg-purple-400 rounded-t-md">
          <p className="font-semibold text-2xl text-center text-purple-900 py-3 ">
            Register
          </p>
        </div>

        <div className="py-6 px-8 w-full flex flex-col items-center">

          <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="username" onChange={usernameRegisterHandler} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              <div className="inline-flex items-center space-x-1">
                <RiUser3Line />
                <span>
                  Username
                </span>
              </div>
            </label>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input type="email" name="email" onChange={emailRegisterHandler} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              <div className="inline-flex items-center space-x-1">
                <MdOutlineMail />
                <span>
                  Email
                </span>
              </div>
            </label>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input type="password" onChange={passwordRegisterHandler} name="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              <div className="inline-flex items-center space-x-1">
                <RiLockPasswordLine />
                <span>
                  Password
                </span>
              </div>
            </label>
          </div>

          <input value="Register" type="submit" class="default-transition text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs md:text-md px-4 py-2 text-center "></input>

          <p className="text-xs mt-8">
            Already have an account? <Link to="/login" className="text-purple-400 cursor-pointer font-semibold hover:text-purple-600 default-transition">Sign in </Link>
          </p>
        </div>

      </form>



    </div>
  );
}

export default Register;
