import { useEffect } from "react";
import useAuthAxios from "../../hooks/useAuthAxios";
import { useNavigate } from "react-router-dom";
const AccessNeededExaple = () => {

    const navigate = useNavigate();

    const authAxios = useAuthAxios();

    // autoryzacja (czy ma konto) po załadowaniu strony

    useEffect(() => {

        authAxios.post('/auth/verify').then(result => {
            console.log(result.data);
        })
            .catch(err => {
                if ((err.config.signal && err.config.signal.reason === "unauthenticated") || err.response.status === 401) {
                    console.log(err.config.signal.reason);
                    navigate('/login'); // przekierowanie np do login w wyniku braku autoryzacji
                }
            });

    }, [authAxios, navigate])

    // autoryzacja (czy ma konto) po kliknięciu do zawartości example

    const example = () => {
        authAxios.post('/auth/example').then(result => {
            console.log(result.data);
        })
            .catch(err => {
                console.log(err)
                if ((err.config.signal && err.config.signal.reason === "unauthenticated") || err.response.status === 401) {
                    console.log(err.config.signal.reason);
                    navigate('/login'); // przekierowanie np do login w wyniku braku autoryzacji
                }
            });
    }

    return (<div>
        Account needed to see this page
        <button onClick={example}>Hello</button>
    </div>);
}

export default AccessNeededExaple;