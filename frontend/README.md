### Autoryzacja

Aby korzystać z autoryzacji na frontend, trzeba używać obiektu axios który można uzyskać z pliku useAuthAxios w  ścieżce './hooks/useAuthAxios'
W przypadku braku autoryzacji zapytanie do serwera się nie powiedzenie i zostanie wzrócony error który jeśli posiada wartość err.config.signal.reason === "unauthenticated" lub err.response.status === 401, 
świadczy to o braku posiadania autentyfikacji (posiadania konta lub błędnych czy wygasłych tokenów uwierzetylnia)
Przykład korzystania znajduje się na stronie "http://localhost:3000/access" i komponencie AccessNeededExample