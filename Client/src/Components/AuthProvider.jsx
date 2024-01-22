import React, { createContext, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");

    const value = {
        token,
        setToken,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);

    if (context === undefined) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }

    return context;
};