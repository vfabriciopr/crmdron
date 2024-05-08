import { useContext, useState, useEffect, createContext } from "react";

interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticaded: false,
});

export function AuthProvider({children}: AuthProviderProps){

    const [isAuthenticaded, setIsAuthenticaded] = useState(true);

    return (<AuthContext.Provider value={{isAuthenticaded}}>
        {children}
        </AuthContext.Provider>
    );
    }
export const useAuth = () => useContext(AuthContext);

