import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
export const UserContext = createContext(null)


export function UserProvider({children}){
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")
    const [isLoggedIn , setIsLoggedIn] = useState(false)

    const auth = (user , pass) => {
        const loginUsername = localStorage.getItem("username")
        const loginPassword = localStorage.getItem("password")
        if(user === loginUsername && pass === loginPassword){
            setTimeout(()=>setIsLoggedIn(true),2000)
            alert("LoggedIn !!")
        } else{
            alert("Incorrect Login or Password")
        }
    }

    
    useEffect(()=>{
    if(username && password.length === 8 ){
            localStorage.setItem("username" , username)
            localStorage.setItem("password" , password)
            setUsername("")
            setPassword("")
        }
    },[username , password , email])
    return(
        <UserContext.Provider value={{username , setUsername , isLoggedIn , setIsLoggedIn , setEmail , setPassword, auth}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext) 