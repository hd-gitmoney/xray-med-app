import { createContext, useReducer } from 'react'

export const ExamsContext = createContext()

export const examsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXAMS':
      return { 
        exams: action.payload 
      }
    case 'CREATE_EXAM':
      return { 
        exams: [action.payload, ...state.exams] 
      }
    case 'DELETE_EXAM':
        return {
            exams: state.exams.filter(w => w._id !== action.payload._id)
        }
    case 'UPDATE_EXAM':
      const updatedExam = action.payload;
      
      const updatedExams = state.exams.map((exam) => {
        if (exam.id === updatedExam.id) {
          return updatedExam;
        }
        return exam;
      }); 
      return {
          ...state,
          exams: updatedExams,
        };
    default:
      return state
  }
}

export const ExamsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(examsReducer, { 
    exams: null
  })
  
  return (
    <ExamsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ExamsContext.Provider>
  )
}