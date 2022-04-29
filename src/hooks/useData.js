import { useContext } from "react";
import userContext from "../context/userContext";

export default function useData(){
    return useContext(userContext);    
}