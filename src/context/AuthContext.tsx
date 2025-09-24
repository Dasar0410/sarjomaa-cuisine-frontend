import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import supabase from "../api/supabase"
import { User, Session } from "@supabase/supabase-js";

interface AuthContextType {
    //currentUser: User | null;
    session: Session | null;
    signUp: (username: string, email: string, password: string) => Promise<{ success: boolean; error?: string; data?: any }>;
    signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string; data?: any }>;
    //signOut: () => Promise<void>;
    //loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;

}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [session, setSession] = useState<Session | null>(null);


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        })

        supabase.auth.onAuthStateChange((_event, session) => { 
            setSession(session);
        })

    }, []);
            

    // Sign Up
    const signUp = async (username: string, email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    display_name: username
                }
            }
        });

        if (error) {
            console.error("Error signing up:", error.message);
            return { success: false, error: error.message };
        }
        return { success: true, data };
    }

    const signIn = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if(error) {
            console.error("Error signing in", error.message)
            return { success: false, error: error.message };
        }
        return { success: true, data };
    }

    return (
        <AuthContext.Provider value={{ session, signUp, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};



export const UserAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('UserAuth must be used within an AuthContextProvider');
    }
    return context;
};