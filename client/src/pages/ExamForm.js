import { NewExamForm } from "../components/FormComponent/NewExamForm";
import { Container } from "react-bootstrap";

const ExamForm = () => {
    return(
        <div>
            <Container>
            <h1>New Exam Form</h1>
                <NewExamForm />
            </Container>
        </div>
    )
}

export default ExamForm;