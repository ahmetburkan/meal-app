import React, { createContext, useEffect, useState, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import { ThemeContext } from "./ThemeContextProvider";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const { setOverlay, setMessage } = useContext(ThemeContext);

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
        // eslint-disable-next-line
    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);

        fetchUserData(decoded.sub, JWT);
        setOverlay('success');
        setMessage("Login successful.");
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        window.location.replace('/');
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
            {isAuth.status === 'done' ? children : ''}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;