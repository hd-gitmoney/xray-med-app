import { ExamContext } from "../context/ExamContext"
import { useContext } from "react"


export const useExamContext = () => {
    const context = useContext(ExamContext)

    if(!context){
        throw Error('useExamContext must be used inside an ExamContextProvider')
    }


    return context

}