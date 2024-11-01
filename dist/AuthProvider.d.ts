import React from "react";
declare global {
    interface Window {
        Parse: typeof Parse;
    }
}
import Parse from 'parse';
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
    fallback: React.ReactNode;
    loader: React.ReactNode;
    children: React.ReactNode;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export declare const useAuth: () => AuthContextType;
