import { createContext, useReducer } from 'react'
import { DELETE, UPDATE, CREATE, FETCH_ALL, FETCH_EXAMDETAILS } from '../constants/actionTypes'

export const ExamContext = createContext()

export const examReducer = (state, action) => {
    switch(action.type){
        case FETCH_ALL:
            return {
                exams : action.payload
            }
        case DELETE:
            return {
                exams  : action.payload
            }


        default:
            return state
    }
}



export const ExamContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(examReducer, { 
        exams : null
    })

    

    return(
        <ExamContext.Provider value={{...state, dispatch}}>
            { children }
        </ExamContext.Provider>

    )
}

