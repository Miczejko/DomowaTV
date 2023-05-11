import jwt_decode from "jwt-decode";
import axios from "axios";



const useAuthAxios = () => {

    const baseURL = "http://localhost:5000";

    const axiosInstance = axios.create({
        baseURL,
        withCredentials: true,
    })

    axiosInstance.interceptors.request.use(async req => {

        const controller = new AbortController();

        let decodedToken;

        // dekodowanie accessTokenu

        try {
            decodedToken = jwt_decode(localStorage.getItem('accessToken'));
        }
        catch (err) {
            console.log(err);
        }

        // Jeśli accessToken wygasa za > x sekund, używany jest bieżący token 

        if (decodedToken && decodedToken.exp && decodedToken.exp - (Date.now() / 1000) > 10) {
            req.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
            return req;
        }

        try {

            // próba odświerzenia accessToken 

            const result = await axios.post(`${baseURL}/auth/refresh`, {}, {
                withCredentials: true
            })

            if (result && result.data && result.data.accessToken) {

                // udane zautetyfikowanie użytkownika

                localStorage.setItem("accessToken", result.data.accessToken);
                req.headers.Authorization = `Bearer ${result.data.accessToken}`;
                return req;
            }
            else {

                // nie zautentyfikowany użytkownik 
                controller.abort("unauthenticated");
                return {
                    ...req,
                    signal: controller.signal
                }
            }
        }
        catch (err) {

            // nie zautentyfikowany użytkownik
            console.log(err);
            controller.abort("unauthenticated");
            return {
                ...req,
                signal: controller.signal
            }
        }


    })

    return axiosInstance;

}

export default useAuthAxios;