const baseApi = process.env.NODE_ENV === 'production'? 'https://adiv-users-mern.herokuapp.com/users/': 'http://localhost:8082/users/'

export async function addUser(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch(`${baseApi}saveUser`, requestOptions)
        .then(response => response.json())
}


export async function getSpecifideUser(dataFromUser){
    const userEmailAndPassword = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataFromUser)
        
    };
    
try{
    console.log(userEmailAndPassword , 'service send data to server');
    return await fetch(`${baseApi}userauth`,userEmailAndPassword)
    .then(response =>  response.json())
    
}
catch(err){
    console.log(err);
}

}