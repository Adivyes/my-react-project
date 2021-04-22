const baseApi = "http://localhost:8080/users/"
export async function addUser(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch(`${baseApi}saveUser`, requestOptions)
        .then(response => response.json())
}


export async function getAllUsers(){
    return await (await fetch(`${baseApi}all`)).json()
}
