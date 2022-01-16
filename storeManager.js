function saveUser(user){
    let value=JSON.stringify(user);//parse into a JSON string
    localStorage.setItem("user",value);
    //user is an obj
}