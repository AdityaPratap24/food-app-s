import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : "aditya",
        email : "aps@gmail.com"
    }
})

export default UserContext;