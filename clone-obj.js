// AVOID SHARED STATE AND MUTATION
export const USERS = [{name: "Akif",age:25}, {name: "Henry",age:20}, {name: "John",age:22}];
export const clone = (obj)=> JSON.parse(JSON.stringify(obj));

const clone1 = JSON.parse(JSON.stringify(USERS));
const clone2 = [...USERS];
