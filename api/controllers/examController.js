//Pam
import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postExam';

const router = express.Router();

export const getExams = async (req, res) => {

}

export const getExam = async (req, res) => {
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

export const updateExam = async (req, res) => {
    const { id } = req.params;
    const { age, sex, zip, latest_bmi, latest_weight, icu_admit, num_icu_admits, mortality, notes } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No exam with id: ${id}`);

    const updatedExam = { age, sex, zip, latest_bmi, latest_weight, icu_admit, num_icu_admits, mortality, notes, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedExam, {new: true });

    res.json(updatedPost);
}

export const deleteExam = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No exam with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Exam deleted succesfully'});
}

export default router;