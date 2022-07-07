import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

function ThemeContextProvider({ children }) {
    // Supported types:
    // 'notice', 'error', 'success', 'main-menu-active'.
    const [overlay, setOverlay] = useState(null);

    // Message to show.
    const [message, setMessage] = useState(null);

    // Set loading when something is happening in the app.
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(null);
            }, 600);
        }

        if (message) {
            setTimeout(() => {
                setOverlay(null);
            }, 5000);
        }
    },[loading, message])

    return (
        <ThemeContext.Provider value={{
            setOverlay: setOverlay,
            overlay: overlay,

            setMessage: setMessage,
            message: message,

            setLoading: setLoading,
            loading: loading,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;