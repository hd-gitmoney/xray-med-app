const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    PATIENT_ID: {
        type: String,
        required: true,
        ref: 'Patient'
    },
    AGE: {
        type: Number,
        required: true
    },
    SEX: {
        type: String,
        require: true
    },
    ZIP: {
        type: Number,
        require: true
    },
    LATEST_BMI: {
        type: Number,
        require: true
    },
    LATESTWEIGHT: {
        type: Number,
        require: true
    },
    png_Filename: {
        type: String,
        require: true
    },
    exam_Id: {
        type: String,
        require: true
    },
    ICU_Admit: {
        type: Boolean,
        require: true
    },
    NUM_ICU_admit: {
        type: Number,
        require: true
    },
    MORTALITY: {
        type: Boolean,
        require: true
    }
})


//connecting to cluster named

const databaseName = "exams"
const collectionName = "exams"
const myDB = mongoose.connection.useDb(databaseName)
module.exports = myDB.model('Exam', examSchema, collectionName)