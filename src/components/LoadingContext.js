import React, { useState, createContext, useContext } from 'react';

// Crear el contexto para loading
export const LoadingContext = createContext({ loading: true, setLoading: () => {} });

// Componente Provider
export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true); // Inicializar el estado de loading

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};