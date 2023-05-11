### Autoryzajca

Aby korzystać z autoryzacji na backend trzeba dodać middleware auth.js do route, w przypadku prawidłowej autentyfikacji można znaleść dane użytkownika w "req.user".
W przypadku błednej autoryzacji zostanie wzrócony błąd do obsłużenia po stronie frontend.