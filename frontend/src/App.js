import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AccessNeededExaple from "./Pages/AcccessNeededExample/AccessNeededExample";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Logout from "./Pages/Logout/Logout";
function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/access" element={<AccessNeededExaple/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App;
