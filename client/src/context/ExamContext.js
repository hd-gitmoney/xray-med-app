import { createContext, useReducer } from 'react'
import { DELETE, UPDATE, CREATE, FETCH_ALL, FETCH_EXAMDETAILS } from '../constants/actionTypes'

export const ExamContext = createContext()

export const examReducer = (state, action) => {
    switch(action.type){
        case FETCH_ALL:
            return {
                exam: action.payload
            }
        case DELETE:
            return {
                exam : action.payload
            }


        default :
            return state
    }
}



export const ExamContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(examReducer, { 
        exam: null
    })

    

    return(
        <ExamContext.Provider value={{...state, dispatch}}>
            { children }
        </ExamContext.Provider>

    )
}

