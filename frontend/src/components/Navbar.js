import {Link} from "react-router-dom"
import "./Navbar.css";
const Navbar = () => {


    return (
        <div className="navbar">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/access">Access</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Navbar;