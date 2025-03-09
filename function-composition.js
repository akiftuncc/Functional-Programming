export const pipe = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

const str = "A dog with an elephant in the room";

const trim = (str) => str.replace(/^\s*|\s*$/g, '');
const noPunctuation = (str) => str.replace(/[?.,!]/g, '');
const capitalize = (str) => str.toUpperCase();
const breakOut = (str) => str.split(" ");
const noArticles = (str) => (str!= "A" && str!= "AN" && str!= "THE");
const filterArticles = (arr) => arr.filter(noArticles);

const prepareString = pipe(trim, noPunctuation, capitalize, breakOut, filterArticles);

const result = prepareString(str);