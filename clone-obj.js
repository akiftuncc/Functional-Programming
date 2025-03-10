// AVOID SHARED STATE AND MUTATIO
import { USERS } from "./helpers.js";

const clone1 = JSON.parse(JSON.stringify(USERS));
const clone2 = [...USERS];
