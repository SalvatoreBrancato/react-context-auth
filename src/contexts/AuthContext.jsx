import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});


    function handleLogin(payload) {
        // Qui effettueremo la chiama API al server backend
        console.log(payload)
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }

    const values = {
        isLoggedIn,
        user,
        handleLogin,
        handleLogout
    };


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }