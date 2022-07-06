import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            // Local token.
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            // No local token.
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);

        fetchUserData(decoded.sub, JWT);
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
    }

    async function fetchUserData(email, token) {
        try {
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    email: email,
                    token: token,
                },
                status: 'done',
            });
        } catch (e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;