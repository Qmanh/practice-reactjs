import React from "react";

const UsersContext = React.createContext({email: '',auth:false});

const UserProvider = ({children})=>{
    const[user,setUser] = React.useState({email:'',auth: false});

    const loginContext = (email,token)=>{
        setUser((user)=>({
            email:email,
            auth: true,
        }));
        localStorage.setItem("token",token);
        localStorage.setItem("email",email);
            
    };

    const logout=()=>{
        localStorage.removeItem("token");
        setUser((user)=>({
            email:'',
            auth:false,
        }));
    };

    return (
        <UsersContext.Provider value={{user,loginContext,logout}}>
            {children}
        </UsersContext.Provider>
    )
}

export {UsersContext,UserProvider};