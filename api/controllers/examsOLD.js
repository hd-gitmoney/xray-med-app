const express = require('express');
const mongoose = require('mongoose');

const PostMessage = require('../models/postExam');

const router = express.Router();

const getExams = async (req, res) => {

}

const getExam = async (req, res) => {
    const { id } = req.params;

    try{
        const exam = await PostMessage.findById(id);

        res.status(200).json(post);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const createExam = async (req, res) => {
    const exam = req.body;

    const newPostMessage = new PostMessage;

    try{
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    }catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateExam = async (req, res) => {
    const { id } = req.params;
    const { PATIENT_ID, SEX, AGE, ZIP, LATEST_BMI,LATESTWEIGHT, png_filename, exam_Id, ICU_Admit, NUM_ICU_admits, MORTALITY } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No exam with id: ${id}`);

    const updatedExam = { PATIENT_ID, SEX, AGE, ZIP, LATEST_BMI,LATESTWEIGHT, png_filename, exam_Id, ICU_Admit, NUM_ICU_admits, MORTALITY, notes, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedExam, {new: true });

    res.json(updatedPost);
}

const deleteExam = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No exam with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Exam deleted succesfully'});
}

module.exports = {
    getExams,
    getExam,
    createExam,
    deleteExam,
    updateExam
}
//export default router;