const curryHello = (greeting) =>{
    return (name) =>{
        return `${greeting} ${name}`;
    }
}

const hello = curryHello("Hello");

console.log(hello("Akif"));
console.log(hello("Henry"));
console.log(hello("John"));
