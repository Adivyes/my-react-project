let usersApi =  "https://next.json-generator.com/api/json/get/E1iKSS0bq"
export default async function usersApiHandler(){
    try{
        let respons = await fetch(usersApi)
        let users = await respons.json() 
        return users;
    }
    catch(error){console.log(error);}
    
    
}
 