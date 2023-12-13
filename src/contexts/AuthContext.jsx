import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();


    function handleLogin(payload) {
        // Qui effettueremo la chiama API al server backend
        if(payload.email === 'prova@email.it' && payload.password ==='password'){

            setIsLoggedIn(true)
            navigate("/admin")

        }
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