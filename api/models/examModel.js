const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    patiendId: {
        type: String,
        required: true,
        ref: 'Patient'
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        require: true
    },
    zipCode: {
        type: String,
        require: true
    },
    latestBmi: {
        type: Number,
        require: true
    },
    examId: {
        type: String,
        require: true
    },
    latestWeight: {
        type: Number,
        require: true
    },
    imageURL: {
        type: String,
        require: true
    },
    icuAdmit: {
        type: Number,
        require: true
    },
    mortality: {
        type: String,
        require: true
    }
})
const databaseName = "exams";
const collectionName = "exams";
const myDB = mongoose.connection.useDb(databaseName);


module.exports = myDB.model('Exam', examSchema, collectionName);