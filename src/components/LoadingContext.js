import React, { useState, createContext, useContext } from 'react';

// Crear el contexto para loading
export const LoadingContext = createContext({ loading: false, setLoading: () => {} });

// Componente Provider
export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false); // Inicializar el estado de loading

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};