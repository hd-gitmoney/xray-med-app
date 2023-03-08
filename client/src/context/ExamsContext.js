import { createContext } from 'react';

export const ExamsContext = createContext()

export const ExamsContextProvider = ({ children }) => {

    return (
        <ExamsContext.Provider>
            { children }
        </ExamsContext.Provider>
    )
}