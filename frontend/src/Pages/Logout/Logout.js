import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        axios.post('http://localhost:5000/auth/logout', {}, {
            withCredentials: true
        })
            .then(result => {
                localStorage.removeItem("accessToken");
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
            })
    }, [navigate]);


    return (
        <>
        </>
    )
}

export default Logout;