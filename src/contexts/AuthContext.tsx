import { createContext } from "react";
import { signInRequest } from "../services/auth";

type AuthContextType = {
    isAuthenticated: boolean;
}

type signInData = {
    email: string;
    password: string
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const isAuthenticated = false;

    async function signIn({email, password }: signInData) {
        const { token, user } = await signInRequest({
            email,
            password,
        })
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}