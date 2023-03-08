const Exam = require('../models/examModel')
const mongoose = require('mongoose')


//get all exams
const getExams = async (req, res) =>{
    //finds all the exams
    const exams = await Exam.find({})
    //sends an okay message and an array of exams
    res.status(200).json(exams)
}

//get a single exam
const getExam = async (req, res) => {
    //gets the id from the url
    const { id } = req.params
    //checks to see if the id is valid for mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such exam'})
      }
    //finds the exam from db
    const exam = await Exam.findById(id)
    //if no exam is found returns error mssg
    if(!exam){
        return res.status(401).json({error: 'No such exam'})
    }
    //if exam found sends back it back to the front
    res.status(200).json(exam)
}

//create a new exam
const createExam = async (req,res) => {
    //grabbing the properties from the request body
    const { PATIENT_ID, AGE, SEX, ZIP, LATEST_BMI,LATESTWEIGHT, png_filename, exam_Id, ICU_Admit, NUM_ICU_admits, MORTALITY } = req.body
    //either try to create exam or catch error and adding to DB
    try{
        //creating a new exam
        const exam = await Exam.create({ PATIENT_ID, AGE, SEX, ZIP, LATEST_BMI,LATESTWEIGHT, png_filename, exam_Id, ICU_Admit, NUM_ICU_admits, MORTALITY })
        res.status(200).json(exam)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a exam
const deleteExam = async (req, res) => {
    //get the exam you want to delete
    const { id } = req.params
    //checks if it is a valid Id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such exam'})
      }

      const exam = await Exam.findOneAndDelete({_id: id})
      //if it does not find the exam
      if(!exam){
        return res.status(401).json({error: 'No such exam'})
    }

    res.status(200).json(exam)

}

//update a exam
const updateExam = async (req, res) => {
    //get the exam you want to delete
    const { id } = req.params
      //checks if it is a valid Id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such exam'})
    }
        
    const exam = await Exam.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!exam){
        return res.status(401).json({error: 'No such exam'})
    }

    res.status(200).json(exam)

}

module.exports = {
    getExams,
    getExam,
    createExam,
    deleteExam,
    updateExam
}