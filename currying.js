import {pipe} from "./function-composition.js";

export function curry(fn,arity=fn.length){
    return (function nextCurried(prevArgs){
        return function curried(nexArg){
            const args = [...prevArgs,nexArg];
            if(args.length >= arity){
                return fn(...args);
            }
            return nextCurried(args);
        }
    })([])
}

const curryHello = (greeting) =>{
    return (name) =>{
        return `${greeting} ${name}`;
    }
}

const hello = curryHello("Hello");

console.log(hello("Akif"));
console.log(hello("Henry"));
console.log(hello("John"));

///
///
///

const fun1 = (a,b,c) => a+b+c;
const fun2 = (d,e) => d+e;
const fun3 = (f,g,h) => f+g+h;

const curried1 = curry(fun1);
const curried2 = curry(fun2);
const curried3 = curry(fun3);

const newFun = pipe(curried1(1)(2),curried2(3),curried3(4)(5));
console.log(newFun(6));
const newFun2 = pipe(curry(fun1)(1)(2),curry(fun2)(3),curry(fun3)(4)(5));
console.log(newFun2(6));