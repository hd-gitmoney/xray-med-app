const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    PATIENT_ID: {
        type: String,
        required: true
    },
    AGE: {
        type: String,
        required: true
    },
    SEX: {
        type: String,
        required: true
    },
    ZIP: {
        type: String,
        required: true
    },
    LATEST_BMI: {
        type: String,
        required: true
    },
    LATESTWEIGHT: {
        type: String,
        required: true
    },
    png_filename: {
        type: String,
        required: true
    },
    exam_Id: {
        type: String,
        required: true
    },
    ICU_Admit: {
        type: String,
        required: true
    },
    NUM_ICU_admits: {
        type: String,
        required: true
    },
    MORTALITY: {
        type: String,
        required: true
    }
})


//connecting to cluster named

const databaseName = "exams"
const collectionName = "exams"
const myDB = mongoose.connection.useDb(databaseName)
module.exports = myDB.model('Exam', examSchema, collectionName)