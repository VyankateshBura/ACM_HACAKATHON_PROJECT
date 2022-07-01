import { createContext,useState } from "react";
const userContext = createContext({
    user:'vyanku',
    setuser:()=>{}
});


export default userContext;