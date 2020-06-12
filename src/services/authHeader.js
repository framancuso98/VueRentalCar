export function authHeader() {
    let utente = JSON.parse(localStorage.getItem("utente"));

    if(utente && utente.token){
        return{ 'Authorization': 'Bearer' + utente.token};
    } else {
        return{};
    }
}