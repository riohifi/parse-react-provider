import React, { createContext, useContext, useLayoutEffect, useRef, useState } from "react";

declare global {
    interface Window {
        Parse: typeof Parse;
    }
}

import Parse from 'parse';
window.Parse = Parse;


export interface AuthContextType {
    user: Parse.User | null;
    login: (username: string, password: string) => Promise<Parse.User>;
    signUp: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
}


export interface AuthProviderProps {
    app: string;
    appUrl: string;
    jsKey: string;
    fallback: React.ReactNode; // Component to show if not authenticated
    loader: React.ReactNode; // Component to show if not authenticated
    children: React.ReactNode; // The main application content
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ app, appUrl, jsKey, fallback, loader, children }) => {
    const [user, setUser] = useState<Parse.User | null>(null);
    const [loading, setLoading] = useState(true);


    useLayoutEffect(() => {
        Parse.initialize(app, jsKey);
        Parse.serverURL = appUrl;
        Parse.enableLocalDatastore()

        const checkCurrentUser = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            const currentUser = Parse.User.current();
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        };

        checkCurrentUser();
    }, [app, appUrl, jsKey]);

    const login = async (username: string, password: string): Promise<Parse.User> => {
        try {
            const loggedInUser = await Parse.User.logIn(username, password);
            setUser(loggedInUser);
            return loggedInUser;
        } catch (error) {
            throw error;
        }
    };

    const logout = async (): Promise<void> => {
        await Parse.User.logOut();
        setUser(null);
        localStorage.clear();
    };

    const signUp = async (username: string, password: string): Promise<void> => {
        const newUser = new Parse.User();
        newUser.set("username", username);
        newUser.set("password", password);
        try {
            const response = await newUser.signUp();
            setUser(response);
        } catch (error) {
            throw error;
        }
    };

    const isAuthenticated = !!user;

    if (loading) {
        return loader  || <Loading />;
    }

    // Render the fallback component if the user is not authenticated
    if (!isAuthenticated) {
        return <>{fallback}</>;
    }

    return (
        <AuthContext.Provider value={{ user, login, signUp, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

const Loading = () => {
    return <p>Loading...</p>
}