import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function ThemeContextProvider({ children }) {
    const [overlay, setOverlay] = useState(null);

    return (
        <ThemeContext.Provider value={{
            setOverlay: setOverlay,
            overlay: overlay,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;