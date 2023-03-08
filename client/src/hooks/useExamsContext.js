import { ExamsContext } from "../context/ExamsContext";
import { useContext } from 'react';

export const useExamsContext = () => {
    const context = useContext(ExamsContext)

    if(!context){
        throw Error('useExamsContext must be used in an ExamsContextProvider')
    }
    return context;
}