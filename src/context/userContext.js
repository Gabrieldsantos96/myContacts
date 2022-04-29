import { createContext } from "react";
import { useUserData } from "../hooks/useUserData";

const userContext = createContext({});

export function Provider(props){
    const userData = useUserData();

    return(
        <userContext.Provider value={userData}>{props.children}</userContext.Provider>
    )
}

export default userContext;