const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    patientId: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        require: true
    },
    zip: {
        type: String,
        require: true
    },
    latestBmi: {
        type: Number,
        require: true
    },
    latestWeight: {
        type: Number,
        require: true
    },
    pngFilename: {
        type: String,
        require: true
    },
    examId: {
        type: String,
        require: true
    },
    icuAdmit: {
        type: Boolean,
        require: true
    },
    numIcuAdmit: {
        type: Number,
        require: true
    },
    mortality: {
        type: Boolean,
        require: true
    }
})

const databaseName = "exams"
const collectionName = "exams"
const myDB = mongoose.connection.useDb(databaseName)
module.exports = myDB.model('Exam', examSchema, collectionName)