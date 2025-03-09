import { pipe } from "./function-composition.js";
import { clone } from "./clone-obj.js";
import { USERS } from "./clone-obj.js";
const users = USERS;

const getUser = (users,name) => users.find(user => user.name.toLowerCase() === name.toLowerCase());
const addAge = (age,user) => {
    if(user){
        user.age += age;
        return user;
    }
    
}
const addOneAge = (user) =>{
    if (user){
        user.age += 1;
        return user;
    }
}

const partGetUser = getUser.bind(null,users);
const partAddAge10 = addAge.bind(null,10);

const updateUser = pipe(partGetUser,clone,partAddAge10,addOneAge);
const newUser = updateUser("Akif");

