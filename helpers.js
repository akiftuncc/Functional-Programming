export const USERS = [{name: "Akif",age:25}, {name: "Henry",age:20}, {name: "John",age:22}];

export const clone = (obj)=> JSON.parse(JSON.stringify(obj));

export const pipe = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

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

